"use client";
import SourceCard from "@/components/Dashboard/UIElements/SourceCard";
import {
  FaExchangeAlt,
  FaCreditCard,
  FaMoneyBillAlt,
  FaUserTie,
} from "react-icons/fa";

const DepositMoney = () => {
  const transactionTypes = [
    {
      id: "bank_transfer",
      href: `/dashboard/user/deposit-money/${"bank-transfer"}`,
      title: "Bank Transfer",
      icon: <FaExchangeAlt className="text-6xl  text-secondary" />,
    },
    {
      id: "credit_card",
      href: `/dashboard/user/deposit-money/${"credit-card"}`,
      title: "Credit Card",
      icon: <FaCreditCard className="text-6xl  text-secondary" />,
    },
    {
      id: "atm",
      href: `/dashboard/user/deposit-money/${"atm"}`,
      title: "ATM",
      icon: <FaMoneyBillAlt className="text-6xl  text-secondary" />,
    },
    {
      id: "agent",
      href: `/dashboard/user/deposit-money/${"agent"}`,
      title: "Agent",
      icon: <FaUserTie className="text-6xl  text-secondary" />,
    },
  ];

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

export default DepositMoney;
