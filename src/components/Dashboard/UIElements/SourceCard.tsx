import { Button, Card, CardBody } from "@nextui-org/react";
import Link from "next/link";
import React from "react";

const SourceCard = ({
  data,
  source,
  setSource,
  onOpen,
}: {
  data: any;
  source: string;
  setSource: any;

  onOpen: any;
}) => {
  const handleClick = () => {
    setSource(data?.id);
    onOpen();
  };

  return (
    <button
      onClick={handleClick}
      className="block xl:max-w-sm  bg-yellow-50 dark:bg-slate-900 dark:text-white shadow-md  border border-primary hover:border-secondary   transition-transform transform hover:scale-105 p-5  lg:p-10"
    >
      <div>
        <div className="flex  justify-center">
          <div className="">
            {data?.icon}
            <h3 className="mt-2 ">{data?.title}</h3>
          </div>
        </div>
      </div>
    </button>
  );
};

export default SourceCard;
