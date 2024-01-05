"use client";

import { Button, Card, Divider, Input } from "@nextui-org/react";
import { IoEyeOffSharp } from "react-icons/io5";
import { GiBleedingEye } from "react-icons/gi";
import { useState } from "react";
import { TbPasswordFingerprint } from "react-icons/tb";
import { MdPhonelinkLock } from "react-icons/md";
import { BiSolidLogIn } from "react-icons/bi";
import { FaHome } from "react-icons/fa";
import ReusableInputForLogin from "@/components/Forms/ReusableInputForLogin";
import Link from "next/link";
const LoginPage = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => setIsVisible(!isVisible);

  const loginHandler = (event: any) => {
    event.preventDefault();
    const phoneNumber = event.target.phone.value;
    const password = event.target.password.value;
    console.log(phoneNumber, password);
  };

  return (
    <div className=" max-w-xs sm:max-w-md mx-auto px-4">
      <div className=" mt-10 lg:mt-16  border-2 border-slate-500 min-h-fit ">
        <div className=" flex justify-between items-center px-5 py-3">
          <h1 className="text-primary text-2xl font-bold ">CholtiBank</h1>

          <Link href={"/"}>
            {" "}
            <Button
              isIconOnly
              startContent={<FaHome className="text-3xl text-secondary" />}
              variant="faded"
            ></Button>
          </Link>
        </div>
        <Divider className="bg-slate-500  pb-0.5" />

        <form onSubmit={loginHandler} className="flex flex-col gap-y-2 p-5">
          <div className=" mb-2">
            <h1 className="text-secondary text-xl font-bold text-center">
              Login
            </h1>
          </div>
          <ReusableInputForLogin
            label="Phone"
            name="phone"
            placeholder="01XXXXXXXXX"
            type={"text"}
            startContent={
              <MdPhonelinkLock className="text-lg text-default-400  flex-shrink-0" />
            }
          />

          <ReusableInputForLogin
            label="Password"
            name="password"
            placeholder="********"
            endContent={
              <button
                className="focus:outline-none"
                type="button"
                onClick={toggleVisibility}
              >
                {isVisible ? (
                  <GiBleedingEye className="text-lg text-default-400 " />
                ) : (
                  <IoEyeOffSharp className="text-lg text-default-400 " />
                )}
              </button>
            }
            type={isVisible ? "text" : "password"}
            startContent={
              <TbPasswordFingerprint className="text-lg text-default-400 " />
            }
          />
          <Button
            type="submit"
            className="text-white w-full"
            color="secondary"
            startContent={<BiSolidLogIn className="text-lg " />}
            fullWidth={true}
            radius="none"
          >
            Login
          </Button>
        </form>
        <div className="my-2">
          <p className="text-center text-slate-500 text-wrap">
            {" Don't have an account? "}
            <Link href={"/open-account"} className="text-secondary font-bold">
              Open an Account
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
