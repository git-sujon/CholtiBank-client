// MobileRecharge page
"use client";
import SourceCard from "@/components/Dashboard/UIElements/SourceCard";
import { MobileOperatorEnum } from "@/constants/enums";
import { FaCreditCard, FaExchangeAlt } from "react-icons/fa";

const MobileRecharge = () => {
  const mobileOperatorTypes = [
    {
      id: "grameenphone",
      href: `/dashboard/user/mobile-recharge/${MobileOperatorEnum.Grameenphone}`,
      title: "Grameenphone",
      icon: <FaExchangeAlt className="text-6xl  text-secondary" />,
    },
    {
      id: "robi",
      href: `/dashboard/user/mobile-recharge/${MobileOperatorEnum.Robi}`,
      title: "Robi",
      icon: <FaExchangeAlt className="text-6xl  text-secondary" />,
    },
    {
      id: "banglalink",
      href: `/dashboard/user/mobile-recharge/${MobileOperatorEnum.Banglalink}`,
      title: "Banglalink",
      icon: <FaExchangeAlt className="text-6xl  text-secondary" />,
    },
    {
      id: "airtel",
      href: `/dashboard/user/mobile-recharge/${MobileOperatorEnum.Airtel}`,
      title: "Airtel",
      icon: <FaExchangeAlt className="text-6xl  text-secondary" />,
    },
    {
      id: "teletalk",
      href: `/dashboard/user/mobile-recharge/${MobileOperatorEnum.Teletalk}`,
      title: "Teletalk",
      icon: <FaExchangeAlt className="text-6xl  text-secondary" />,
    },
  ];

  return (
    <div className="p-4 lg:p-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {mobileOperatorTypes.map((type) => (
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
