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

export const depositSource = [
  { label: "Bank Transfer", value: "bank_transfer" },
  { label: "Credit Card", value: "credit_card" },
  { label: "ATM", value: "atm" },
  { label: "Agent", value: "agent" },
];
