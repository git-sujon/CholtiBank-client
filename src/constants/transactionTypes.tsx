import {
  FaExchangeAlt,
  FaCreditCard,
  FaMoneyBillAlt,
  FaUserTie,
} from "react-icons/fa";

export const depositTransactionTypes = [
  {
    id: "bank_transfer",

    title: "Bank Transfer",
    icon: <FaExchangeAlt className="text-6xl  text-secondary" />,
  },
  {
    id: "credit_card",

    title: "Credit Card",
    icon: <FaCreditCard className="text-6xl  text-secondary" />,
  },
  {
    id: "atm",

    title: "ATM",
    icon: <FaMoneyBillAlt className="text-6xl  text-secondary" />,
  },
  {
    id: "agent",

    title: "Agent",
    icon: <FaUserTie className="text-6xl  text-secondary" />,
  },
];

export const withdrawSourceTypes = [
  {
    id: "agent",

    title: "Agent",
    icon: <FaUserTie className="text-6xl text-secondary" />,
  },
  {
    id: "atm",

    title: "ATM",
    icon: <FaMoneyBillAlt className="text-6xl text-secondary" />,
  },
];

export const transferSourceTypes = [
  {
    id: "Cholti_to_Cholti",
    title: "Cholti to Cholti",
    icon: <FaExchangeAlt className="text-6xl text-secondary" />,
  },
  {
    id: "NPSB",
    title: "NPSB",
    icon: <FaCreditCard className="text-6xl text-secondary" />,
  },
  {
    id: "EFT",
    title: "EFT",
    icon: <FaCreditCard className="text-6xl text-secondary" />,
  },
  {
    id: "RTGS",
    title: "RTGS",
    icon: <FaExchangeAlt className="text-6xl text-secondary" />,
  },
  {
    id: "Cash_by_code",
    title: "Cash by Code",
    icon: <FaExchangeAlt className="text-6xl text-secondary" />,
  },
  {
    id: "BKash",
    title: "BKash",
    icon: <FaExchangeAlt className="text-6xl text-secondary" />,
  },
  {
    id: "Nagad",
    title: "Nagad",
    icon: <FaExchangeAlt className="text-6xl text-secondary" />,
  },
  {
    id: "Prepaid_Card",
    title: "Prepaid Card",
    icon: <FaExchangeAlt className="text-6xl text-secondary" />,
  },
  {
    id: "Binimoy",
    title: "Binimoy",
    icon: <FaExchangeAlt className="text-6xl text-secondary" />,
  },
];


export const mobileOperatorTypes = [
  {
    id: "Grameenphone",

    title: "Grameenphone",
    icon: <FaExchangeAlt className="text-6xl  text-secondary" />,
  },
  {
    id: "Robi",

    title: "Robi",
    icon: <FaExchangeAlt className="text-6xl  text-secondary" />,
  },
  {
    id: "Banglalink",

    title: "Banglalink",
    icon: <FaExchangeAlt className="text-6xl  text-secondary" />,
  },
  {
    id: "Airtel",

    title: "Airtel",
    icon: <FaExchangeAlt className="text-6xl  text-secondary" />,
  },
  {
    id: "Teletalk",

    title: "Teletalk",
    icon: <FaExchangeAlt className="text-6xl  text-secondary" />,
  },
];

export const depositSource = [
  { label: "Bank Transfer", value: "bank_transfer" },
  { label: "Credit Card", value: "credit_card" },
  { label: "ATM", value: "atm" },
  { label: "Agent", value: "agent" },
];
