"use client";
import React from "react";
import { Sidebar } from "./sidebar.styles";
import { CollapseItems } from "./collapse-items";
import { SidebarItem } from "./sidebar-item";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { RiHomeOfficeFill } from "react-icons/ri";
import { FaUsers } from "react-icons/fa6";
import { AiOutlineTransaction } from "react-icons/ai";
import { FaRegCreditCard } from "react-icons/fa";
import { RiBriefcase4Fill } from "react-icons/ri";
import { CiCreditCard1 } from "react-icons/ci";
import { usePathname } from "next/navigation";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { setCollapsed } from "@/redux/slices/sidebarSlice";
export const SidebarWrapper = () => {
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
        <div className="flex gap-8 items-center px-6">
          <Image
            src="/choltiBank.png"
            alt="CholtiBank"
            width={200}
            height={100}
          />
        </div>
        <div className="flex flex-col justify-between h-full">
          <div className="flex flex-col gap-6 mt-9 px-2">
            <SidebarItem
              title="Home"
              icon={<RiHomeOfficeFill />}
              isActive={pathname === "/dashboard/admin"}
              href="/dashboard/admin"
            />
            <SidebarItem
              title="Users"
              icon={<FaUsers />}
              isActive={pathname === "/dashboard/admin/users"}
              href="/dashboard/admin/users"
            />
            <SidebarItem
              title="All Transactions"
              icon={<AiOutlineTransaction />}
            />
            <CollapseItems
              icon={<FaRegCreditCard />}
              items={[
                { icon: <CiCreditCard1 />, title: "Cholti Plus", href: "#" },
                { icon: <CiCreditCard1 />, title: "Cholti Gold", href: "#" },
                { icon: <CiCreditCard1 />, title: "Visa", href: "#" },
              ]}
              title="Cards Issues"
            />
            <SidebarItem title="Loan Officers" icon={<RiBriefcase4Fill />} />
          </div>
        </div>
      </div>
    </div>
  );
};
