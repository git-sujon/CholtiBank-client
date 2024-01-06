"use client"

import DashboardHeader from "@/components/Layout/Header/DashboardHeader";
import { SidebarWrapper } from "@/components/Layout/sidebar/sidebar";
import { useLockedBody } from "@/hooks/useBodyLock";
import { SidebarContext } from "@/layout/layout-context";
import React from "react";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  const [sidebarOpen, setSidebarOpen] = React.useState(false);
  const [_, setLocked] = useLockedBody(false);
  const handleToggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
    setLocked(!sidebarOpen);
  };

  return (
    <>
      <SidebarContext.Provider
      value={{
        collapsed: sidebarOpen,
        setCollapsed: handleToggleSidebar,
      }}
    >
      <section className="flex">
        <SidebarWrapper />
        <DashboardHeader>{children}</DashboardHeader>
      </section>
    </SidebarContext.Provider>
    </>
  );
};

export default DashboardLayout;
