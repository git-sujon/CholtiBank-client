"use client";
// OpenAccountPage.tsx
import { Button, Divider, Input } from "@nextui-org/react";
import { IoEyeOffSharp } from "react-icons/io5";
import { GiBleedingEye } from "react-icons/gi";
import { useState } from "react";
import { TbPasswordFingerprint } from "react-icons/tb";
import { MdPhonelinkLock } from "react-icons/md";
import { BiSolidLogIn } from "react-icons/bi";
import ReusableInputForLogin from "@/components/Forms/ReusableInputForLogin";
import Link from "next/link";
import { FaHome } from "react-icons/fa";
import { FaUserTie } from "react-icons/fa";
import { FaRegUser } from "react-icons/fa";
import { FaIdCard } from "react-icons/fa";
import { TbPasswordUser } from "react-icons/tb";

const OpenAccountPage = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isVisiblePin, setIsVisiblePin] = useState(false);

  const toggleVisibility = () => setIsVisible(!isVisible);
  const toggleVisibilityPin = () => setIsVisiblePin(!isVisiblePin);

  const signUpHandler = (event: any) => {
    event.preventDefault();
    const firstName = event.target.firstName.value;
    const lastName = event.target.lastName.value;
    const nationalId = event.target.nationalId.value;
    const phoneNumber = event.target.phone.value;
    const password = event.target.password.value;
    const pin = event.target.pin.value;
    console.log(firstName, lastName, nationalId, phoneNumber, password, pin);
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

        <form onSubmit={signUpHandler} className="flex flex-col gap-y-2 p-5">
          <div className=" mb-2">
            <h1 className="text-secondary text-xl font-bold text-center">
              Open an Account
            </h1>
          </div>

          <ReusableInputForLogin
            label="First Name"
            name="firstName"
            placeholder="Moniruzzaman"
            type={"text"}
            startContent={
              <FaUserTie className="text-lg text-default-400  flex-shrink-0" />
            }
          />

          <ReusableInputForLogin
            label="Last Name"
            name="lastName"
            placeholder="Sujon"
            type={"text"}
            startContent={
              <FaRegUser className="text-lg text-default-400  flex-shrink-0" />
            }
          />

          <ReusableInputForLogin
            label="National ID"
            name="nationalId"
            placeholder="123456789"
            type={"text"}
            startContent={
                <FaIdCard className="text-lg text-default-400  flex-shrink-0" />
              }
          />

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

          <ReusableInputForLogin
            label="PIN"
            name="pin"
            placeholder="********"
            endContent={
                <button
                  className="focus:outline-none"
                  type="button"
                  onClick={toggleVisibilityPin}
                >
                  {isVisiblePin ? (
                    <GiBleedingEye className="text-lg text-default-400 " />
                  ) : (
                    <IoEyeOffSharp className="text-lg text-default-400 " />
                  )}
                </button>
              }
              type={isVisiblePin ? "text" : "password"}
            startContent={
                <TbPasswordUser className="text-lg text-default-400  flex-shrink-0" />
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
            Create Account
          </Button>
        </form>
        <div className="my-2">
          <p className="text-center text-slate-500 text-wrap">
            {" Already have an account? "}
            <Link href={"/login"} className="text-secondary font-bold">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default OpenAccountPage;
