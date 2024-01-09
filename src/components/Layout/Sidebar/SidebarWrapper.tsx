"use client";
import React from "react";
import { Sidebar } from "./sidebar.styles";
import { CollapseItems } from "./collapse-items";
import { SidebarItem } from "./sidebar-item";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { setCollapsed } from "@/redux/slices/sidebarSlice";
import Link from "next/link";
export const SidebarWrapper = ({ menuItems }: { menuItems: any }) => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const collapsed = useAppSelector((state) => state.sidebar.collapsed);
  const pathname = usePathname();

  const handleOverlayClick = () => {
    dispatch(setCollapsed());
  };

  return (
    <div className="">
      {collapsed ? (
        <div className={Sidebar.Overlay()} onClick={handleOverlayClick} />
      ) : null}
      <div
        className={Sidebar({
          collapsed: collapsed,
        })}
      >
        <Link href={"/"} className="flex gap-8 items-center px-6">
          <Image
            src="/choltiBank.png"
            alt="CholtiBank"
            width={200}
            height={100}
          />
        </Link>
        <div className="flex flex-col justify-between h-full">
          <div className="flex flex-col gap-6 mt-9 px-2">
            {menuItems.map((item: any) =>
              item.items ? (
                <CollapseItems
                  key={item.title}
                  icon={item.icon}
                  title={item.title}
                  items={item.items}
                />
              ) : (
                <SidebarItem
                  key={item.title}
                  title={item.title}
                  icon={item.icon}
                  isActive={pathname === item.path}
                  href={item.path}
                />
              )
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
