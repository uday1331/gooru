import React from "react";
import {
  MdAssessment,
  MdDashboard,
  MdGamepad,
  MdSettings,
} from "react-icons/all";
import { Stories, Track } from "./components/employer";
import { Game } from "./components/employee";

export const employerNavItemList = [
  {
    name: "Dashboard",
    logo: <MdDashboard size={30} />,
    component: <>Dashboard</>,
    route: "/employer/dashboard",
  },
  {
    name: "Stories",
    logo: <MdGamepad size={30} />,
    component: <Stories />,
    route: "/employer/stories",
  },
  {
    name: "Track",
    logo: <MdAssessment size={30} />,
    component: <Track />,
    route: "/employer/track",
  },
  {
    name: "Settings",
    logo: <MdSettings size={30} />,
    component: <>Settings</>,
    route: "/employer/settings",
  },
];

export const employeeNavItemList = [
  {
    name: "Dashboard",
    logo: <MdDashboard size={30} />,
    component: <>Dashboard</>,
    route: "/employee/dashboard",
  },
  {
    name: "Game",
    logo: <MdGamepad size={30} />,
    component: <Game />,
    route: "/employee/game",
  },
  {
    name: "Settings",
    logo: <MdSettings size={30} />,
    component: <>Settings</>,
    route: "/employee/settings",
  },
];
