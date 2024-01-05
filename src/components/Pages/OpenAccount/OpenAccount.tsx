import { TbPasswordFingerprint } from "react-icons/tb";
import { MdPhonelinkLock } from "react-icons/md";
import { BiSolidLogIn } from "react-icons/bi";
import ReusableInput from "@/components/Forms/ReusableInput";
import { FaUserTie } from "react-icons/fa";
import { FaRegUser } from "react-icons/fa";
import { FaIdCard } from "react-icons/fa";
import { TbPasswordUser } from "react-icons/tb";
import { IoEyeOffSharp } from "react-icons/io5";
import { GiBleedingEye } from "react-icons/gi";
import { useState } from "react";
import { Button } from "@nextui-org/react";
const OpenAccount = () => {
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
    <form onSubmit={signUpHandler} className="flex flex-col gap-y-2 p-5">
      <div className=" mb-2">
        <h1 className="text-secondary text-xl font-bold text-center">
          Open an Account
        </h1>
      </div>

      <ReusableInput
        label="First Name"
        name="firstName"
        placeholder="Moniruzzaman"
        type={"text"}
        startContent={
          <FaUserTie className="text-lg text-default-400  flex-shrink-0" />
        }
      />

      <ReusableInput
        label="Last Name"
        name="lastName"
        placeholder="Sujon"
        type={"text"}
        startContent={
          <FaRegUser className="text-lg text-default-400  flex-shrink-0" />
        }
      />

      <ReusableInput
        label="National ID"
        name="nationalId"
        placeholder="123456789"
        type={"text"}
        startContent={
          <FaIdCard className="text-lg text-default-400  flex-shrink-0" />
        }
      />

      <ReusableInput
        label="Phone"
        name="phone"
        placeholder="01XXXXXXXXX"
        type={"text"}
        startContent={
          <MdPhonelinkLock className="text-lg text-default-400  flex-shrink-0" />
        }
      />

      <ReusableInput
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

      <ReusableInput
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
  );
};

export default OpenAccount;
