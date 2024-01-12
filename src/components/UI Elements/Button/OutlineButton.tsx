import { Button } from "@nextui-org/react";
import React from "react";

const OutlineButton = ({
  startContent,
  endContent,
  title,
}: {
  startContent?: React.ReactNode;
  endContent?: React.ReactNode;
  title: string;
}) => {
  return (
    <Button
      color="secondary"
      variant="bordered"
      className="hover:border-primary dark:border-yellow-300 dark:text-white font-semibold"
      endContent={endContent}
      startContent={startContent}
    >
      {title}
    </Button>
  );
};

export default OutlineButton;
