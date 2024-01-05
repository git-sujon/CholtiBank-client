"use client";

import { Button, Divider, Input } from "@nextui-org/react";
import { IoEyeOffSharp } from "react-icons/io5";
import { GiBleedingEye } from "react-icons/gi";
import { useState } from "react";
import { TbPasswordFingerprint } from "react-icons/tb";
import { MdPhonelinkLock } from "react-icons/md";
import { BiSolidLogIn } from "react-icons/bi";
import { FaHome } from "react-icons/fa";
import ReusableInputForLogin from "@/components/Forms/ReusableInputForLogin";
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
    <div className="flex justify-center ">
      <div className=" mt-20 lg:mt-32 border border-slate-900 min-h-fit">
        <div className=" flex justify-between items-center px-5 py-3">
          <h1 className="text-primary text-2xl font-bold ">CholtiBank</h1>
          <Button
            isIconOnly
            startContent={<FaHome className="text-3xl text-secondary" />}
            href="/"
            variant="faded"
          />
        </div>
        <Divider className="bg-slate-900" />

        <form onSubmit={loginHandler} className="flex flex-col gap-y-2 p-5 ">
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
              <MdPhonelinkLock className="text-lg text-default-400 pointer-events-none flex-shrink-0" />
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
                  <GiBleedingEye className="text-lg text-default-400 pointer-events-none" />
                ) : (
                  <IoEyeOffSharp className="text-lg text-default-400 pointer-events-none" />
                )}
              </button>
            }
            type={isVisible ? "text" : "password"}
            startContent={
              <TbPasswordFingerprint className="text-lg text-default-400 pointer-events-none flex-shrink-0" />
            }
          />
          <Button
            type="submit"
            className="text-white"
            color="secondary"
            startContent={<BiSolidLogIn className="text-lg " />}
            fullWidth={true}
            radius="none"
          >
            Login
          </Button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
