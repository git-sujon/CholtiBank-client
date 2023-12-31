"use client";

import CountUp from "react-countup";
const CountNumbers = () => {
  return (
    <div className="flex items-center gap-x-5">
      {/* single count */}
      <div className="flex flex-col">
        <div className="font-black text-secondary text-4xl flex items-center">
          <CountUp end={17} />
          <p>M</p>
          <p className="text-5xl mb-2 ml-[-3px]">+</p>
        </div>
        <p className="leading-relaxed text-secondary-800  font-semibold mt-[-8px]">
          Customers
        </p>
      </div>
      {/* single count */}
      <div className="flex flex-col">
        <div className="font-black text-secondary text-4xl flex items-center">
          <p>$</p>
          <CountUp end={134} />
          <p>B</p>
          <p className="text-5xl mb-2 ml-[-3px]">+</p>
        </div>
        <p className="leading-relaxed text-secondary-800  font-semibold mt-[-8px]">
          Loans Given
        </p>
      </div>
      {/* single count */}
      <div className="flex flex-col">
        <div className="font-black text-secondary text-4xl flex items-center">
          <CountUp end={12} />
          <p>M</p>
          <p className="text-5xl mb-2 ml-[-3px]">+</p>
        </div>
        <p className="leading-relaxed text-secondary-800  font-semibold mt-[-8px]">
          Cards Approved
        </p>
      </div>
    </div>
  );
};

export default CountNumbers;
