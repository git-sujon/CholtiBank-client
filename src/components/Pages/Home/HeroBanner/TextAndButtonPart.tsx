import { Button } from "@nextui-org/react";
import CountNumbers from "./CountNumbers";
import { IoMdOpen } from "react-icons/io";
import OutlineButton from "@/components/UI Elements/Button/OutlineButton";
const TextAndButtonPart = () => {
  return (
    <div className="space-y-3 max-w-md ">
      <h1 className="text-4xl font-black uppercase text-primary">
        {"Bangladesh's"} first digital bank
      </h1>
      <p className="leading-relaxed  text-slate-600 dark:text-slate-100 text-justify">
        {
          "Introducing CholtiBank, Bangladesh's pioneer in digital banking innovation. As the country's first digital bank, we are dedicated to transforming your banking experience into a seamless and efficient journey."
        }
      </p>

      <OutlineButton
        title="Open Account"
        endContent={<IoMdOpen className="text-secondary text-xl dark:text-yellow-500 " />}
      />
      <CountNumbers />
    </div>
  );
};

export default TextAndButtonPart;
