import React from "react";
import { Redirect } from "react-router-dom";

import Home from '../application/Home/Home';
import Recommend from '../application/Recommend/Recommend';
import Singers from '../application/Singers/Singers';
import Rank from '../application/Rank/Rank';
import Album from "../application/Album/Album";
import Singer from '../application/Singer/Singer';

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
                component: Recommend,
                routes: [
                    {
                        path: "/recommend/:id",
                        component: Album
                    }
                ]
            },
            {
                path: "/singers",
                component: Singers,
                key: "singers",
                routes: [
                    {
                        path: "/singers/:id",
                        component: Singer
                    }
                ]
            },
            {
                path: "/rank/",
                component: Rank,
                key: "rank",
                routes: [
                    {
                        path: "/rank/:id",
                        component: Album
                    }
                ]
            },
        ]
    }
]