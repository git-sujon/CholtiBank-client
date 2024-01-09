// TransferMoney page
"use client";
import SourceCard from "@/components/Dashboard/UIElements/SourceCard";
import { FaExchangeAlt, FaCreditCard } from "react-icons/fa";

const TransferMoney = () => {
  const transferSources = [
    "Cholti_to_Cholti",
    "NPSB",
    "EFT",
    "RTGS",
    "Cash_by_code",
    "BKash",
    "Nagad",
    "Prepaid_Card",
    "Binimoy",
  ];

  const transactionTypes = transferSources.map((source) => ({
    id: source,
    href: `/dashboard/user/transfer-money/${source}`,
    title: source.replace(/_/g, " "),
    icon: <FaExchangeAlt className="text-6xl text-secondary" />,
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

export default TransferMoney;
