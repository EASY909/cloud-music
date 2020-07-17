import React,{Suspense } from "react";
import { Redirect } from "react-router-dom";

import Home from '../application/Home/Home';
// import Recommend from '';
// import Singers from '../application/Singers/Singers';
// import Rank from '../application/Rank/Rank';
// import Album from "../application/Album/Album";
// import Singer from '../application/Singer/Singer';
// import Search from '../application/Search';

const RecommendComponent = React.lazy(() => import("../application/Recommend/Recommend"));
const SingersComponent = React.lazy(() => import("../application/Singers/Singers"));
const RankComponent = React.lazy(() => import("../application/Rank/Rank"));
const AlbumComponent = React.lazy(() => import("../application/Album/Album"));
const SingerComponent =React.lazy(() => import("../application/Singer/Singer"));
const SearchComponent = React.lazy(() => import("../application/Search"));

const SuspenseComponent = Component => props => {
    return (
        <Suspense fallback={null}>
            <Component {...props}></Component>
        </Suspense>
    )
}

export default [
    {
        path: "/",
        component: Home,
        routes: [
            {
                path: "/",
                exact: true,
                render: () => (
                    <Redirect to={"/recommend"} />
                )
            },
            {
                path: "/recommend",
                component: SuspenseComponent(RecommendComponent),
                routes: [
                    {
                        path: "/recommend/:id",
                        component: SuspenseComponent(AlbumComponent)
                    }
                ]
            },
            {
                path: "/singers",
                component: SuspenseComponent(SingersComponent),
                key: "singers",
                routes: [
                    {
                        path: "/singers/:id",
                        component: SuspenseComponent(SingerComponent)
                    }
                ]
            },
            {
                path: "/rank/",
                component: SuspenseComponent(RankComponent),
                key: "rank",
                routes: [
                    {
                        path: "/rank/:id",
                        component: SuspenseComponent(AlbumComponent)
                    }
                ]
            },
            {
                path: "/album/:id",
                exact: true,
                key: "album",
                component: SuspenseComponent(AlbumComponent)
            },
            {
                path: "/search",
                exact: true,
                key: "search",
                component: SuspenseComponent(SearchComponent)
            }
        ]
    }
]