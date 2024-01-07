"use client";

import DashboardHeader from "@/components/Layout/Header/DashboardHeader";
import { SidebarWrapper } from "@/components/Layout/sidebar/sidebar";
import React from "react";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <section className="flex">
        <SidebarWrapper />
        <DashboardHeader>{children}</DashboardHeader>
      </section>
    </>
  );
};

export default DashboardLayout;
