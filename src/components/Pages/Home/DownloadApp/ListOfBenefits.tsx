import { appBenefits } from "@/constants/AppBenefits";
import React from "react";

const ListOfBenefits = () => {
  return (
    <div className="grid grid-cols-2 gap-x-2 md:gap-x-5">
      {appBenefits.map((benefits, index) => (
        <div key={index} className="flex items-center gap-x-4 mb-2">
          {benefits.icon}
          <p className="font-semibold">{benefits.title}</p>
        </div>
      ))}
    </div>
  );
};

export default ListOfBenefits;
