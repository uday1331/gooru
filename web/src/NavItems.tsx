import React from "react";
import {
  MdAssessment,
  MdDashboard,
  MdGamepad,
  MdSettings,
} from "react-icons/all";
import { Stories, Track } from "./components";

export const NavItemList = [
  {
    name: "Dashboard",
    logo: <MdDashboard size={30} />,
    component: <>Dashboard</>,
    route: "/dashboard",
  },
  {
    name: "Stories",
    logo: <MdGamepad size={30} />,
    component: <Stories />,
    route: "/stories",
  },
  {
    name: "Track",
    logo: <MdAssessment size={30} />,
    component: <Track />,
    route: "/track",
  },
  {
    name: "Settings",
    logo: <MdSettings size={30} />,
    component: <>Settings</>,
    route: "/settings",
  },
];
