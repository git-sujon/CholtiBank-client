import { Card, CardBody } from "@nextui-org/react";
import React from "react";
import { TbCurrencyTaka } from "react-icons/tb";

export const BalanceCard = () => {
  return (
    <Card className="xl:max-w-sm bg-secondary text-white  shadow-md px-3 w-full">
      <CardBody className="py-5">
        <div className="flex gap-2 items-center">
          <TbCurrencyTaka className="text-4xl " />
          <div className="flex flex-col">
            <span className="font-semibold text-lg">Current Balance</span>
            <span className="font-bold text-2xl">7500</span>
          </div>
        </div>
    
      </CardBody>
    </Card>
  );
};
