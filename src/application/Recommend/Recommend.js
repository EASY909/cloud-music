import React, { useRef, useEffect } from "react";
import Slider from "../../components/Slider/index";
import RecommendList from '../../components/list';
import Scroll from "../../baseUI/scroll"
import * as actionTypes from './store/actionCreators';
import { Content } from "./style";
import { connect } from "react-redux";
import { forceCheck } from 'react-lazyload';
import Loading from '../../baseUI/loading/index';
import { renderRoutes } from 'react-router-config';

function Recommend(props) {

    const { songsCount } = props;
    const { bannerList, recommendList, enterLoading } = props;
    const { getBannerDataDispatch, getRecommendListDataDispatch } = props;

    useEffect(() => {
        if (!bannerList.size) {
            getBannerDataDispatch();
        }
        if (!recommendList.size) {
            getRecommendListDataDispatch();
        };
        //eslint-disable-next-line
    }, []);
    const onScroll=(pos)=>{
        console.log(pos);
    }
    const bannerListJS = bannerList ? bannerList.toJS() : [];
    const recommendListJS = recommendList ? recommendList.toJS() : [];
    return (
        <div>
            <Content play={songsCount}>
                <Scroll className="list" onScroll={forceCheck}>
                    <div>
                        <Slider bannerList={bannerListJS}></Slider>
                        <RecommendList recommendList={recommendListJS}></RecommendList>
                    </div>
                </Scroll>

                {enterLoading ? <Loading></Loading> : null}

                {renderRoutes(props.route.routes)}
            </Content>
        </div>
    )
}
const mapStateToProps = (state) => {
    return {
        bannerList: state.getIn(['recommend', 'bannerList']),
        recommendList: state.getIn(['recommend', 'recommendList']),
        enterLoading: state.getIn(['recommend', 'enterLoading']),
        songsCount: state.getIn (['player', 'playList']).size
    }
}


// 映射 dispatch 到 props 上
const mapDispatchToProps = (dispatch) => {
    return {
        getBannerDataDispatch() {
            dispatch(actionTypes.getBannerList());
        },
        getRecommendListDataDispatch() {
            dispatch(actionTypes.getRecommendList());
        },
    }
};
export default connect(mapStateToProps, mapDispatchToProps)(React.memo(Recommend));