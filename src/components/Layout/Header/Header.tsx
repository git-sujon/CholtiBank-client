"use client";

import React, { useEffect, useState } from "react";
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
import { usePathname, useRouter } from "next/navigation";
import { getUserInfo, removeUserInfo } from "@/services/auth.services";
import { authKey } from "@/constants/storageKeys";
import { IJwtDecoded } from "@/types/user";
import { menuItems } from "@/constants/header";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [isUserLogged, setIsUserLogged] = useState(false);

  const pathName = usePathname();
  const router = useRouter();

  const userInfo = getUserInfo() as IJwtDecoded;

  useEffect(() => {
    if (userInfo?.userId) {
      setIsUserLogged(true);
    }
  }, [userInfo?.userId]);

  const logoutHandler = () => {
    setIsUserLogged(false);
    removeUserInfo(authKey);
    router.push("/");
  };
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
        {menuItems.map((item) => (
          <NavbarItem key={item.id}>
            {item.href === "/login" ? (
              ""
            ) : (
              <Link
                className="text-slate-800 dark:text-white hover:text-primary font-semibold"
                href={item.href}
              >
                {item.title}
              </Link>
            )}
          </NavbarItem>
        ))}
      </NavbarContent>

      <NavbarContent justify="end">
        <NavbarItem>
          <ThemeSwitcher />
        </NavbarItem>
        {userInfo?.userId ? (
          <NavbarItem>
            <Button
              as={Link}
              color="primary"
              href={`/dashboard/${userInfo?.role}`}
              variant="bordered"
            >
              My Account
            </Button>
          </NavbarItem>
        ) : (
          <NavbarItem>
            <Button as={Link} color="primary" href="/login" variant="bordered">
              My Account
            </Button>
          </NavbarItem>
        )}
        
        {userInfo?.userId && (
          <NavbarItem>
            <Button onClick={logoutHandler} color="primary" variant="bordered">
              Logout
            </Button>
          </NavbarItem>
        )}
      </NavbarContent>

      <NavbarMenu>
        {menuItems.map((item) => (
          <NavbarMenuItem key={item.id}>
            {item.href === "/login" ? (
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
                className="text-slate-800 dark:text-white hover:text-primary"
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
