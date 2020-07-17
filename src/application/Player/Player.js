import React, { useRef, useState, useEffect } from "react";
import { connect } from "react-redux";
import {
    changePlayingState,
    changeShowPlayList,
    changeCurrentIndex,
    changeCurrentSong,
    changePlayList,
    changePlayMode,
    changeFullScreen
} from "./store/actionCreators";
import MiniPlayer from "./miniPlayer";
import NormalPlayer from "./normalPlayer";
import { getSongUrl, isEmptyObject, shuffle, findIndex } from "../../api/utils";
import { playMode } from '../../api/config';
import PlayList from './play-list/index';
import { getLyricRequest } from "../../api/request";
import Lyric from './../../api/lyric-parser';
function Player(props) {
    //目前播放时间
    const [currentTime, setCurrentTime] = useState(0);

    const [duration, setDuration] = useState(0);

    let percent = isNaN(currentTime / duration) ? 0 : currentTime / duration;
    const [currentPlayingLyric, setPlayingLyric] = useState("");
    const [preSong, setPreSong] = useState({});
    const [modeText, setModeText] = useState("");

    const audioRef = useRef();
    const toastRef = useRef();
    const currentLyric = useRef();
    const currentLineNum = useRef(0);
    const songReady = useRef(true);

    const {
        playing,
        currentSong: immutableCurrentSong,
        currentIndex,
        playList: immutablePlayList,
        mode,//播放模式
        sequencePlayList: immutableSequencePlayList,//顺序列表
        fullScreen
    } = props;

    const {
        togglePlayingDispatch,
        togglePlayListDispatch,
        changeCurrentIndexDispatch,
        changeCurrentDispatch,
        changePlayListDispatch,//改变playList
        changeModeDispatch,//改变mode
        toggleFullScreenDispatch,
    } = props;
    const playList = immutablePlayList.toJS();
    const sequencePlayList = immutableSequencePlayList.toJS();
    const currentSong = immutableCurrentSong.toJS();
  
    useEffect(() => {

        if (
            !playList.length ||
            currentIndex === -1 ||
            !playList[currentIndex] ||
            playList[currentIndex].id === preSong.id ||
            !songReady.current// 标志位为 false
        )
            return;
        let current = playList[currentIndex];
        setPreSong(current);
        songReady.current = false; // 把标志位置为 false, 表示现在新的资源没有缓冲完成，不能切歌
        changeCurrentDispatch(current);// 赋值 currentSong
        audioRef.current.src = getSongUrl(current.id);
        setTimeout(() => {
            // 注意，play 方法返回的是一个 promise 对象
            audioRef.current.play().then(() => {
                songReady.current = true;
            });
        });
        togglePlayingDispatch(true);// 播放状态
        getLyric(current.id);
        setCurrentTime(0);// 从头开始播放
        setDuration((current.dt / 1000) | 0);// 时长
    }, [playList, currentIndex]);
    useEffect(() => {
        playing ? audioRef.current.play() : audioRef.current.pause();
    }, [playing]);


    const handleLyric = ({ lineNum, txt }) => {
     
        if (!currentLyric.current) return;
        currentLineNum.current = lineNum;
        setPlayingLyric(txt);
    };

    const getLyric = id => {
        let lyric = "";
        if (currentLyric.current) {
          currentLyric.current.stop();
        }
        // 避免songReady恒为false的情况
        setTimeout(() => {
          songReady.current = true;
        }, 3000);
        getLyricRequest(id)
        .then(data => {
          lyric = data.lrc.lyric;
    
          if(!lyric) {
            currentLyric.current = null;
            return;
          }
          currentLyric.current = new Lyric(lyric, handleLyric);
          currentLyric.current.play();
          currentLineNum.current = 0;
          currentLyric.current.seek(0);
        })
        .catch(() => {
          songReady.current = true;
          audioRef.current.play();
        });
      };

      const clickPlaying = (e, state) => {
        e.stopPropagation();
        togglePlayingDispatch(state);
        if (currentLyric.current) {
            currentLyric.current.togglePlay(currentTime * 1000);
        }
    };
    const updateTime = e => {
        setCurrentTime(e.target.currentTime);
      };

      const onProgressChange = curPercent => {
        const newTime = curPercent * duration;
        setCurrentTime(newTime);
        audioRef.current.currentTime = newTime;
        if (!playing) {
            togglePlayingDispatch(true);
        }
        if (currentLyric.current) {
            currentLyric.current.seek(newTime * 1000);
        }
    };
    //一首歌循环
    const handleLoop = () => {
        audioRef.current.currentTime = 0;
        changePlayingState(true);
        audioRef.current.play();
    };

    const handlePrev = () => {
        //播放列表只有一首歌时单曲循环
        if (playList.length === 1) {
            handleLoop();
            return;
        }
        let index = currentIndex - 1;
        if (index < 0) index = playList.length - 1;
        if (!playing) togglePlayingDispatch(true);
        changeCurrentIndexDispatch(index);
    };
    const changeMode = () => {
        let newMode = (mode + 1) % 3;
        if (newMode === 0) {
            //顺序模式
            changePlayListDispatch(sequencePlayList);
            let index = findIndex(currentSong, sequencePlayList);
            changeCurrentIndexDispatch(index);
        } else if (newMode === 1) {
            //单曲循环
            changePlayListDispatch(sequencePlayList);
            console.log(sequencePlayList);
        } else if (newMode === 2) {
            //随机播放
            let newList = shuffle(sequencePlayList);
            let index = findIndex(currentSong, newList);
            changePlayListDispatch(newList);
            changeCurrentIndexDispatch(index);
        }
        changeModeDispatch(newMode);
    };

    const handleNext = () => {
        //播放列表只有一首歌时单曲循环

        if (playList.length === 1) {
            handleLoop();
            return;
        }
        let index = currentIndex + 1;
        if (index === playList.length) index = 0;
        if (!playing) togglePlayingDispatch(true);
        changeCurrentIndexDispatch(index);
    };

    const handleEnd = () => {
        if (mode === playMode.loop) {
            handleLoop();
        } else {
            handleNext();
        }
    };
    const handleError = () => {
        songReady.current = true;
        alert("播放出错");
    };








    return (
        <div>
            {isEmptyObject(currentSong) ? null :
                <MiniPlayer
                    song={currentSong}
                    fullScreen={fullScreen}
                    playing={playing}
                    toggleFullScreen={toggleFullScreenDispatch}
                    clickPlaying={clickPlaying}
                    percent={percent}
                    changePlayListDispatch={changePlayListDispatch}
                    togglePlayList={togglePlayListDispatch}
                />
            }
            {isEmptyObject(currentSong) ? null :
                <NormalPlayer
                    song={currentSong}
                    fullScreen={fullScreen}
                    playing={playing}
                    mode={mode}
                    currentLyric={currentLyric.current}
                    currentPlayingLyric={currentPlayingLyric}
                    currentLineNum={currentLineNum.current}
                    changeMode={changeMode}
                    duration={duration}
                    currentTime={currentTime}
                    percent={percent}
                    toggleFullScreen={toggleFullScreenDispatch}
                    clickPlaying={clickPlaying}
                    onProgressChange={onProgressChange}
                    handlePrev={handlePrev}
                    handleNext={handleNext}
                    changePlayListDispatch={changePlayListDispatch}
                    togglePlayList={togglePlayListDispatch}
                />
            }
            <audio
                ref={audioRef}
                onTimeUpdate={updateTime}
                onEnded={handleEnd}
                onError={handleError}
            ></audio>
            <PlayList clearPreSong={setPreSong.bind(null, {})}></PlayList>
        </div>
    )
}

const mapStateToProps = state => ({
    fullScreen: state.getIn(["player", "fullScreen"]),
    playing: state.getIn(["player", "playing"]),
    currentSong: state.getIn(["player", "currentSong"]),
    showPlayList: state.getIn(["player", "showPlayList"]),
    mode: state.getIn(["player", "mode"]),
    currentIndex: state.getIn(["player", "currentIndex"]),
    playList: state.getIn(["player", "playList"]),
    sequencePlayList: state.getIn(["player", "sequencePlayList"])
});

// 映射 dispatch 到 props 上
const mapDispatchToProps = dispatch => {
    return {
        togglePlayingDispatch(data) {
            dispatch(changePlayingState(data));
        },
        toggleFullScreenDispatch(data) {
            dispatch(changeFullScreen(data));
        },
        togglePlayListDispatch(data) {
            dispatch(changeShowPlayList(data));
        },
        changeCurrentIndexDispatch(index) {
            dispatch(changeCurrentIndex(index));
        },
        changeCurrentDispatch(data) {
            dispatch(changeCurrentSong(data));
        },
        changeModeDispatch(data) {
            dispatch(changePlayMode(data));
        },
        changePlayListDispatch(data) {
            dispatch(changePlayList(data));
        }
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(React.memo(Player));