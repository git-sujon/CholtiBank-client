"use client";

import DashboardHeader from "@/components/Layout/Header/DashboardHeader";
import { SidebarWrapper } from "@/components/Layout/sidebar/SidebarWrapper";

import React from "react";
import { RiHomeOfficeFill } from "react-icons/ri";
import { FaUsers } from "react-icons/fa6";
import { AiOutlineTransaction } from "react-icons/ai";
import { FaRegCreditCard } from "react-icons/fa";
import { RiBriefcase4Fill } from "react-icons/ri";
import { CiCreditCard1 } from "react-icons/ci";

const UserDashboardLayout = ({ children }: { children: React.ReactNode }) => {
  const usersMenuItems = [
    {
      title: "Home",
      icon: <RiHomeOfficeFill />,
      path: "/dashboard/user",
    },
    {
      title: "Statements",
      icon: <AiOutlineTransaction />,
      path: "/dashboard/user/statements",
    },
    {
      title: "Cards Issues",
      icon: <FaRegCreditCard />,
      items: [
        { title: "Cholti Plus", icon: <CiCreditCard1 />, path: "#" },
        { title: "Cholti Gold", icon: <CiCreditCard1 />, path: "#" },
        { title: "Visa", icon: <CiCreditCard1 />, path: "#" },
      ],
    },
    {
      title: "Loan Officers",
      icon: <RiBriefcase4Fill />,
      path: "/dashboard/admin/loan-officers",
    },
    // Add more menu items as needed
  ];

  return (
    <>
      <section className="flex mx-auto max-w-screen-2xl ">
        <SidebarWrapper menuItems={usersMenuItems} />
        <DashboardHeader>{children}</DashboardHeader>
      </section>
    </>
  );
};

export default UserDashboardLayout;
