import React from "react";
import { Airplay, Book, Activity, Settings } from "react-feather";
import { Stories, Track } from "./components";

export const NavItemList = [
  {
    name: "Dashboard",
    logo: <Airplay size={"18px"} />,
    component: <>Dashboard</>,
    route: "/dashboard",
  },
  {
    name: "Stories",
    logo: <Book size={"18px"} />,
    component: <Stories />,
    route: "/stories",
  },
  {
    name: "Track",
    logo: <Activity size={"18px"} />,
    component: <Track />,
    route: "/track",
  },
  {
    name: "Settings",
    logo: <Settings size={"18px"} />,
    component: <>Settings</>,
    route: "/settings",
  },
];
