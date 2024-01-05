"use client";

import { Input } from "@nextui-org/react";
import { IoEyeOffSharp } from "react-icons/io5";
import { GiBleedingEye } from "react-icons/gi";
import { useState } from "react";
import { TbPasswordFingerprint } from "react-icons/tb";
import { MdPhonelinkLock } from "react-icons/md";

const LoginPage = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => setIsVisible(!isVisible);

  return (
    <div className="min-h-dvh flex justify-center items-center ">
      <div className="flex flex-col gap-y-2">
        <h1 className="text-primary text-3xl md:4xl font-bold text-center uppercase">Login</h1>
        <Input
          className="max-w-sm"
          type="phone"
          label="Phone"
          variant="bordered"
          placeholder="01XXXXXXXXX"
          labelPlacement="inside"
          //   errorMessage="Please enter a valid Phone"
          isInvalid={true}
          startContent={
            <MdPhonelinkLock className="text-lg text-default-400 pointer-events-none flex-shrink-0" />
          }
          classNames={{
            mainWrapper: "rounded-none",
            innerWrapper: "rounded-none",
            inputWrapper: "rounded-none",
          }}
        />

        <Input
          className="max-w-sm"
          label="Password"
          variant="bordered"
          placeholder="Enter your password"
          //   errorMessage="Please enter valid password"
          isInvalid={true}
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
          classNames={{
            mainWrapper: "rounded-none",
            innerWrapper: "rounded-none",
            inputWrapper: "rounded-none",
          }}
        />
      </div>
    </div>
  );
};

export default LoginPage;
