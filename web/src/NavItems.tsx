import React from "react";
import { Airplay, Book, Activity, Settings } from "react-feather";
import { Dashboard, Stories, Track } from "./components";

export const NavItemList = [
  {
    name: "Dashboard",
    logo: <Airplay size={"28px"} />,
    component: <Dashboard />,
    route: "/dashboard",
  },
  {
    name: "Stories",
    logo: <Book size={"28px"} />,
    component: <Stories />,
    route: "/stories",
  },
  {
    name: "Track",
    logo: <Activity size={"28px"} />,
    component: <Track />,
    route: "/track",
  },
  {
    name: "Settings",
    logo: <Settings size={"28px"} />,
    component: <>Settings</>,
    route: "/settings",
  },
];
