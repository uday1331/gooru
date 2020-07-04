import React from "react";
import { MdDashboard, MdSettings, MdGamepad } from "react-icons/md";

import { Template } from "../template";
import { Stories } from "./stories";

const navItemList = [
  {
    name: "Dashboard",
    logo: <MdDashboard size={30} />,
    component: <>Dashboard</>,
    route: "/employee/dashboard",
  },
  {
    name: "Stories",
    logo: <MdGamepad size={30} />,
    component: <Stories />,
    route: "/employee/stories",
  },
  {
    name: "Settings",
    logo: <MdSettings size={30} />,
    component: <>Settings</>,
    route: "/employee/settings",
  },
];

export const Employee: React.FC = () => {
  return <Template navItemList={navItemList} />;
};
