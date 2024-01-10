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
    id: "cholti_to_cholti",

    title: "Cholti to Cholti",
    icon: <FaExchangeAlt className="text-6xl text-secondary" />,
  },
  {
    id: "npsb",

    title: "NPSB",
    icon: <FaCreditCard className="text-6xl text-secondary" />,
  },
  {
    id: "eft",

    title: "EFT",
    icon: <FaCreditCard className="text-6xl text-secondary" />,
  },
  {
    id: "rtgs",

    title: "RTGS",
    icon: <FaExchangeAlt className="text-6xl text-secondary" />,
  },
  {
    id: "cash_by_code",

    title: "Cash by Code",
    icon: <FaExchangeAlt className="text-6xl text-secondary" />,
  },
  {
    id: "bkash",

    title: "BKash",
    icon: <FaExchangeAlt className="text-6xl text-secondary" />,
  },
  {
    id: "nagad",

    title: "Nagad",
    icon: <FaExchangeAlt className="text-6xl text-secondary" />,
  },
  {
    id: "prepaid_card",

    title: "Prepaid Card",
    icon: <FaExchangeAlt className="text-6xl text-secondary" />,
  },
  {
    id: "binimoy",

    title: "Binimoy",
    icon: <FaExchangeAlt className="text-6xl text-secondary" />,
  },
];

export const mobileOperatorTypes = [
  {
    id: "grameenphone",

    title: "Grameenphone",
    icon: <FaExchangeAlt className="text-6xl  text-secondary" />,
  },
  {
    id: "robi",

    title: "Robi",
    icon: <FaExchangeAlt className="text-6xl  text-secondary" />,
  },
  {
    id: "banglalink",

    title: "Banglalink",
    icon: <FaExchangeAlt className="text-6xl  text-secondary" />,
  },
  {
    id: "airtel",

    title: "Airtel",
    icon: <FaExchangeAlt className="text-6xl  text-secondary" />,
  },
  {
    id: "teletalk",

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
