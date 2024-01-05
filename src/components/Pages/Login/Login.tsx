"use client";

import { Button, Card, Divider, Input } from "@nextui-org/react";
import { IoEyeOffSharp } from "react-icons/io5";
import { GiBleedingEye } from "react-icons/gi";
import { useState } from "react";
import { TbPasswordFingerprint } from "react-icons/tb";
import { MdPhonelinkLock } from "react-icons/md";
import { BiSolidLogIn } from "react-icons/bi";
import ReusableInputForLogin from "@/components/Forms/ReusableInputForLogin";
import Link from "next/link";
import { useUserLoginMutation } from "@/redux/api/authApi";
const Login = () => {
  const [userLogin, { isLoading }] = useUserLoginMutation();
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => setIsVisible(!isVisible);

  const loginHandler = async (e: any) => {
    e.preventDefault();
    const phoneNumber = e.target.phone.value;
    const password = e.target.password.value;

    const data = {
      phoneNumber,
      password,
    };

    const response = await userLogin(data).unwrap();

    console.log("response:", response);

    console.log("response:", response);
  };

  return (
    <>
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
    </>
  );
};

export default Login;
