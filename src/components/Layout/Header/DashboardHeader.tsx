"use client";
import React from "react";
import { MdMenu, MdOutlineMailOutline } from "react-icons/md";
import {
  Navbar,
  NavbarBrand,
  NavbarMenuToggle,
  NavbarMenuItem,
  NavbarMenu,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
  Dropdown,
  DropdownTrigger,
  Avatar,
  DropdownMenu,
  DropdownItem,
  Badge,
  Card,
  ButtonGroup,
} from "@nextui-org/react";
import { MdOutlineNotificationsActive } from "react-icons/md";
import { FaRegEnvelope } from "react-icons/fa";
import Image from "next/image";
import { ThemeSwitcher } from "@/components/Utility/ThemeSwitcher";
import notifications from "@/constants/notifications";
import { formatTimestamp } from "@/utils/formatTimeStamp";
import messages from "@/constants/message";
const DashboardHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const menuItems = [
    {
      id: "1",
      title: "Home",
      href: "/",
    },
  ];

  const messageCount = messages.length; // Calculate the number of messages
  const isInvisible = messageCount === 0; // Check if there are no messages

  const notificationCount = notifications?.length;

  return (
    <Navbar
      isBordered
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
      className=""
      maxWidth="2xl"
    >
      <NavbarContent className="block sm:hidden" justify="start">
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
          icon={<MdMenu className="text-CSecondary size-12" />}
        ></NavbarMenuToggle>
      </NavbarContent>
      {/* Mobile screen logo */}
      <NavbarContent className="sm:hidden pr-3" justify="center">
        <NavbarBrand>
          <Image
            src="/choltiBank.png"
            alt="CholtiBank"
            width={200}
            height={100}
          />
        </NavbarBrand>
      </NavbarContent>

      {/* lg screen logo */}

      <NavbarContent className="hidden sm:flex gap-4" justify="start">
        <NavbarBrand>
          <Image
            src="/choltiBank.png"
            alt="CholtiBank"
            width={200}
            height={100}
          />
        </NavbarBrand>
      </NavbarContent>
    

      <NavbarContent justify="end" className="m-0 p-0">
      <ButtonGroup size="lg">
        <NavbarItem>
          <ThemeSwitcher />
        </NavbarItem>

        <NavbarItem>
          <Dropdown placement="bottom-end" backdrop="blur">
            <DropdownTrigger>
              <Button  size="md" variant="light" isIconOnly  >
                <Badge
                  color="danger"
                  content={messageCount}
                  isInvisible={isInvisible}
                  shape="circle"
                >
                  <MdOutlineMailOutline className="text-3xl" />
                </Badge>
              </Button>
            </DropdownTrigger>
            <DropdownMenu aria-label="Message Actions" variant="flat">
              {messages.map((message) => (
                <DropdownItem
                  key={message.id}
                  className={``}
                  variant="shadow"
                  color="primary"
                  showDivider={true}
                >
                  <div className="message-content hover:text-white p-2">
                    <p className="message-message">{message.message}</p>
                    <p className="message-timestamp">
                      {formatTimestamp(message.timestamp)}
                    </p>
                  </div>
                </DropdownItem>
              ))}
            </DropdownMenu>
          </Dropdown>
        </NavbarItem>

        <NavbarItem>
          <Dropdown placement="bottom-end" backdrop="blur">
            <DropdownTrigger>
              <Button className="" size="md" variant="light" isIconOnly >
                <Badge
                  color="danger"
                  content={notificationCount}
                  isInvisible={isInvisible}
                  shape="circle"
                >
                  <MdOutlineNotificationsActive className="text-3xl " />
                </Badge>
              </Button>
            </DropdownTrigger>
            <DropdownMenu aria-label="Profile Actions" variant="flat">
              {notifications.map((notification) => (
                <DropdownItem
                  key={notification.id}
                  className={` `}
                  variant="shadow"
                  color="primary"
                  showDivider={true}
                >
                  <div className="notification-content hover:text-white  p-2">
                    <p className="notification-message">
                      {notification.message}
                    </p>
                    <p className="notification-timestamp">
                      {formatTimestamp(notification.timestamp)}
                    </p>
                  </div>
                </DropdownItem>
              ))}
            </DropdownMenu>
          </Dropdown>
        </NavbarItem>

        <NavbarItem>
          <Dropdown placement="bottom-end">
            <DropdownTrigger>
              <Avatar
                isBordered
                as="button"
                className="transition-transform"
                src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
              />
            </DropdownTrigger>
            <DropdownMenu aria-label="Profile Actions" variant="flat">
              <DropdownItem key="profile" className="h-14 gap-2">
                <p className="font-semibold">Signed in as</p>
                <p className="font-semibold">zoey@example.com</p>
              </DropdownItem>

              <DropdownItem key="help_and_feedback">
                Help & Feedback
              </DropdownItem>
              <DropdownItem key="logout" color="danger">
                Log Out
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </NavbarItem>
        </ButtonGroup>
      </NavbarContent>

      {/* <NavbarMenu>
        {menuItems.map((item) => (
          <NavbarMenuItem key={item.id}></NavbarMenuItem>
        ))}
      </NavbarMenu> */}
    </Navbar>
  );
};

export default DashboardHeader;
