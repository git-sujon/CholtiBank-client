import { Input } from "@nextui-org/react";
import { GiBleedingEye } from "react-icons/gi";
import { IoEyeOffSharp } from "react-icons/io5";
import { TbPasswordFingerprint } from "react-icons/tb";

interface ReusableInputForLoginProps {
  label: string;
  name: string;
  placeholder: string;
  type: string;
  isRequired?: boolean;
  isInvalid?: boolean;
  startContent?: React.ReactNode;
  endContent?: React.ReactNode;
}

const ReusableInputForLogin: React.FC<ReusableInputForLoginProps> = ({
  label,
  name,
  placeholder,
  type,
  isRequired = false,
  isInvalid = false,
  startContent,
  endContent,
}) => {
  return (
    <Input
      className="max-w-sm"
      isRequired={isRequired}
      size="sm"
      label={label}
      name={name}
      variant="bordered"
      placeholder={placeholder}
      isInvalid={isInvalid}
      type={type}
      startContent={startContent}
      endContent={endContent}
      classNames={{
        mainWrapper: "rounded-none",
        innerWrapper: "rounded-none",
        inputWrapper: "rounded-none",
      }}
    />
  );
};

export default ReusableInputForLogin;
