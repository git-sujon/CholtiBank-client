import React from "react";
import { FaRegCreditCard } from "react-icons/fa";
import { FiCreditCard } from "react-icons/fi";
import { FaRegCreditCard as FaRegCreditCard6 } from "react-icons/fa6";
const CardBenefits = () => {
  return (
    <div>
      <h1 className="text-3xl md:text-4xl  font-black mb-5 uppercase max-w-lg ">
        Unlock Exclusive Benefits with Our
        <span className="text-primary"> CholtiBank </span>
        Cards
      </h1>
      <p className="leading-relaxed  text-slate-900 dark:text-slate-50 max-w-lg text-justify">
        {
          "Experience a new level of financial freedom with our range of cutting-edge digital bank cards. Whether you're looking for seamless transactions, enhanced security features, or exciting rewards, our cards have you covered."
        }
      </p>

      <div className="space-y-3 mt-3 ml-10">
        <div className="flex items-center gap-x-4 mb-2">
          <FiCreditCard className="text-2xl text-secondary" />
          <p className="font-semibold">Cholti Plus</p>
        </div>
        <div className="flex items-center gap-x-4 mb-2">
          <FaRegCreditCard className="text-2xl text-yellow-500" />
          <p className="font-semibold">Cholti Gold</p>
        </div>
        <div className="flex items-center gap-x-4 mb-2">
          <FaRegCreditCard6 className="text-2xl text-green-600" />
          <p className="font-semibold">Cholti Premium</p>
        </div>
      </div>
    </div>
  );
};

export default CardBenefits;
