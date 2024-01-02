"use client";

import React from "react";
import { MdMenu } from "react-icons/md";
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
} from "@nextui-org/react";
import Image from "next/image";
import { ThemeSwitcher } from "@/components/Utility/ThemeSwitcher";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuItems = [
    {
      id: "1",
      title: "Invest",
      href: "/invest",
    },

    {
      id: "2",
      title: "Loan",
      href: "/loan",
    },
    {
      id: "3",
      title: "Payments",
      href: "/payments",
    },
    {
      id: "4",
      title: "My Account",
      href: "/login",
    },
  ];

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

      {/* Menus */}

      <NavbarContent className="hidden sm:flex gap-4 " justify="start">
        <NavbarItem>
          <Link
            className="text-slate-800 dark:text-white hover:text-primary font-semibold"
            href="/invest"
          >
            Invest
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            className="text-slate-800 dark:text-white hover:text-primary font-semibold"
            href="/loan"
            aria-current="true"
          >
            Loan
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            className="text-slate-800 dark:text-white hover:text-primary font-semibold"
            href="/payments"
          >
            Payments
          </Link>
        </NavbarItem>
      </NavbarContent>

      <NavbarContent justify="end">
        <NavbarItem>
          <ThemeSwitcher />
        </NavbarItem>
        <NavbarItem>
          <Button as={Link} color="primary" href="/login" variant="bordered">
            My Account
          </Button>
        </NavbarItem>
      </NavbarContent>

      <NavbarMenu>
        {menuItems.map((item) => (
          <NavbarMenuItem key={item.id}>
            {item.id === "4" ? (
              <Button
                as={Link}
                color="primary"
                href="/login"
                variant="bordered"
              >
                My Account
              </Button>
            ) : (
              <Link
                className="text-slate-800 dark:text-white hover:text-primary font-semibold"
                href={item.href}
                size="lg"
              >
                {item.title}
              </Link>
            )}
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
};
export default Header;
