import React from "react";
import { renderRoutes } from "react-router-config"
import { Top, Tab, TabItem } from "./style";
import { NavLink } from "react-router-dom"
import Player from '../Player/Player';


function Home(props) {
    // console.log(props);
    const { route } = props;
    return (
        <div>
            <Top>
                <span className="iconfont menu">&#xe672;</span>
                <span className="iconfont title">&#xe504;</span>
                <span className="iconfont search">&#xe6e1;</span>
            </Top>
            <Tab>
                <NavLink to="/recommend" activeClassName="selected"><TabItem><span > 推荐 </span></TabItem></NavLink>
                <NavLink to="/singers" activeClassName="selected"><TabItem><span > 歌手 </span></TabItem></NavLink>
                <NavLink to="/rank" activeClassName="selected"><TabItem><span > 排行榜 </span></TabItem></NavLink>
            </Tab>
            {renderRoutes(route.routes)}
            <Player></Player>
        </div>
    )
}

export default React.memo(Home)