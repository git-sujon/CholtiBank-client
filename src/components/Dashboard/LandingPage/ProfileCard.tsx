import { formatDate } from "@/helpers/formatDate";
import { Avatar, Card } from "@nextui-org/react";
import {
  FaBirthdayCake,
  FaMobileAlt,
  FaRegMoneyBillAlt,
  FaUserAlt,
} from "react-icons/fa";
import { IoMdCalendar } from "react-icons/io";

const ProfileCard = ({ user }: { user: any }) => {
  const {
    firstName,
    lastName,
    phoneNumber,
    userFinancialInfo,
    createdAt,
    personalInfo,
  } = user;

  const { accountNumber, accountBalance, accountType, currency } =
    userFinancialInfo || {};

  const { dateOfBirth, gender, nationality, email, occupation } =
    personalInfo || {};

  return (
    <Card className=" bg-yellow-50 dark:bg-slate-900 dark:text-white shadow-md w-full  border border-primary hover:border-secondary   transition-transform transform hover:scale-105 flex items-center ">
      <div className="mt-8">
        <Avatar src="/user.jpg" className="w-20 h-20 text-large" />
      </div>
      <div className="bg-white p-6 rounded-md shadow-md">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center">
            <FaUserAlt className="text-3xl text-primary mr-2" />
            <div>
              <p className="font-bold text-lg">{`${firstName || ""} ${
                lastName || ""
              }`}</p>
              <p className="text-gray-500">Customer</p>
            </div>
          </div>
          <IoMdCalendar className="text-gray-500" />
          <p className="text-gray-500">
            {createdAt ? formatDate(createdAt, "MMMM dd, yyyy") : ""}
          </p>
        </div>

        <div className="mb-4">
          <div className="flex items-center mb-2">
            <FaMobileAlt className="text-xl text-primary mr-2" />
            <p className="text-gray-600">{phoneNumber || ""}</p>
          </div>
          <div className="flex items-center mb-2">
            <FaBirthdayCake className="text-xl text-primary mr-2" />
            <p className="text-gray-600">
              {dateOfBirth ? formatDate(dateOfBirth, "MMMM dd, yyyy") : ""}
            </p>
          </div>
          <div className="flex items-center mb-2">
            <FaRegMoneyBillAlt className="text-xl text-primary mr-2" />
            <p className="text-gray-600">
              {`Account: ${accountNumber || ""} | Balance: ${
                accountBalance || ""
              } ${currency || ""}`}
            </p>
          </div>
          <div className="flex items-center">
            <FaMobileAlt className="text-xl text-primary mr-2" />
            <p className="text-gray-600">{email || ""}</p>
          </div>
        </div>

        <div className="flex items-center">
          <div className="flex items-center">
            <div className="bg-primary text-white rounded-full p-2 mr-2">
              {accountType === "current" ? "Current" : "Savings"}
            </div>
            <p className="text-gray-600">{`Account Type`}</p>
          </div>
        </div>

        <div className="mt-4">
          <p className="text-gray-600">{`Gender: ${gender || ""}`}</p>
          <p className="text-gray-600">{`Nationality: ${nationality || ""}`}</p>
          <p className="text-gray-600">{`Occupation: ${occupation || ""}`}</p>
        </div>
      </div>
    </Card>
  );
};

export default ProfileCard;
