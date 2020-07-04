import React from "react";
import {
  MdDashboard,
  MdSettings,
  MdAssessment,
  MdGamepad,
} from "react-icons/md";

import { Template } from "../template";
import { Stories } from "./stories";

const navItemList = [
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
    component: <>Track</>,
    route: "/employer/track",
  },
  {
    name: "Settings",
    logo: <MdSettings size={30} />,
    component: <>Settings</>,
    route: "/employer/settings",
  },
];

export const Employer: React.FC = () => {
  return <Template navItemList={navItemList} />;
};
