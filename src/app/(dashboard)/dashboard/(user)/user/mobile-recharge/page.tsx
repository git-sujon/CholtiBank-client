// MobileRecharge page
"use client";
import SourceCard from "@/components/Dashboard/UIElements/SourceCard";
import { FaCreditCard } from "react-icons/fa";

const MobileRecharge = () => {
  const mobileOperators = [
    "Grameenphone",
    "Robi",
    "Banglalink",
    "Airtel",
    "Teletalk",
  ];

  const transactionTypes = mobileOperators.map((operator) => ({
    id: operator,
    href: `/dashboard/user/mobile-recharge/${operator}`,
    title: operator,
    icon: <FaCreditCard className="text-6xl text-secondary" />,
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

export default MobileRecharge;
