// WithdrawMoney page
"use client";
import SourceCard from "@/components/Dashboard/UIElements/SourceCard";
import { WithdrawSourceEnum } from "@/constants/enums";
import { FaUserTie, FaMoneyBillAlt } from "react-icons/fa";

const WithdrawMoney = () => {
  const withdrawSources = ["agent", "atm"];

  const withdrawSourceTypes = [
    {
      id: "agent",
      href: `/dashboard/user/withdraw-money/${WithdrawSourceEnum.agent}`,
      title: "Agent",
      icon: <FaUserTie className="text-6xl text-secondary" />,
    },
    {
      id: "atm",
      href: `/dashboard/user/withdraw-money/${WithdrawSourceEnum.atm}`,
      title: "ATM",
      icon: <FaMoneyBillAlt className="text-6xl text-secondary" />,
    },
  ];
  

  return (
    <div className="p-4 lg:p-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {withdrawSourceTypes.map((type) => (
          <SourceCard
            key={type.id}
            icon={type.icon}
            href={type.href}
            title={type.title}
          />
        ))}
      </div>
    </div>
  );
};

export default WithdrawMoney;
