// WithdrawMoney page
"use client";
import SourceCard from "@/components/Dashboard/UIElements/SourceCard";
import { FaUserTie, FaMoneyBillAlt } from "react-icons/fa";

const WithdrawMoney = () => {
  const withdrawSources = ["agent", "atm"];

  const transactionTypes = withdrawSources.map((source) => ({
    id: source,
    href: `/dashboard/user/withdraw-money/${source}`,
    title: source.charAt(0).toUpperCase() + source.slice(1),
    icon: <FaUserTie className="text-6xl text-secondary" />,
  }));

  return (
    <div className="p-4 lg:p-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {transactionTypes.map((type) => (
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
