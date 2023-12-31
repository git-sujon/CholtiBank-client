import { Button } from "@nextui-org/react";
import CountNumbers from "./CountNumbers";

const TextAndButtonPart = () => {
  return (
    <div className="space-y-3 max-w-md">
      <h1 className="text-4xl font-black uppercase text-primary">
        {"Bangladesh's"} first digital bank
      </h1>
      <p className="leading-relaxed  text-slate-600 text-justify">
        {
          "Introducing CholtiBank, Bangladesh's pioneer in digital banking innovation. As the country's first digital bank, we are dedicated to transforming your banking experience into a seamless and efficient journey."
        }
      </p>
      <Button
        color="secondary"
        variant="bordered"
        className="hover:border-primary"
      >
        Open Account
      </Button>
      <CountNumbers />
    </div>
  );
};

export default TextAndButtonPart;
