// TransferMoney page
"use client";
import SourceCard from "@/components/Dashboard/UIElements/SourceCard";
import { TransferSourceEnum } from "@/constants/enums";
import { FaExchangeAlt, FaCreditCard } from "react-icons/fa";

const TransferMoney = () => {
  const transferSourceTypes = [
    {
      id: "cholti_to_cholti",
      href: `/dashboard/user/transfer-money/${TransferSourceEnum.Cholti_to_Cholti}`,
      title: "Cholti to Cholti",
      icon: <FaExchangeAlt className="text-6xl text-secondary" />,
    },
    {
      id: "npsb",
      href: `/dashboard/user/transfer-money/${TransferSourceEnum.NPSB}`,
      title: "NPSB",
      icon: <FaCreditCard className="text-6xl text-secondary" />,
    },
    {
      id: "eft",
      href: `/dashboard/user/transfer-money/${TransferSourceEnum.EFT}`,
      title: "EFT",
      icon: <FaCreditCard className="text-6xl text-secondary" />,
    },
    {
      id: "rtgs",
      href: `/dashboard/user/transfer-money/${TransferSourceEnum.RTGS}`,
      title: "RTGS",
      icon: <FaExchangeAlt className="text-6xl text-secondary" />,
    },
    {
      id: "cash_by_code",
      href: `/dashboard/user/transfer-money/${TransferSourceEnum.Cash_by_code}`,
      title: "Cash by Code",
      icon: <FaExchangeAlt className="text-6xl text-secondary" />,
    },
    {
      id: "bkash",
      href: `/dashboard/user/transfer-money/${TransferSourceEnum.BKash}`,
      title: "BKash",
      icon: <FaExchangeAlt className="text-6xl text-secondary" />,
    },
    {
      id: "nagad",
      href: `/dashboard/user/transfer-money/${TransferSourceEnum.Nagad}`,
      title: "Nagad",
      icon: <FaExchangeAlt className="text-6xl text-secondary" />,
    },
    {
      id: "prepaid_card",
      href: `/dashboard/user/transfer-money/${TransferSourceEnum.Prepaid_Card}`,
      title: "Prepaid Card",
      icon: <FaExchangeAlt className="text-6xl text-secondary" />,
    },
    {
      id: "binimoy",
      href: `/dashboard/user/transfer-money/${TransferSourceEnum.Binimoy}`,
      title: "Binimoy",
      icon: <FaExchangeAlt className="text-6xl text-secondary" />,
    },
  ];

  return (
    <div className="p-4 lg:p-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {transferSourceTypes.map((type) => (
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
