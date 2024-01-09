import { formatDate } from "@/helpers/formatDate";
import { Card, Avatar, Button } from "@nextui-org/react";
import {
  FaMobileAlt,
  FaRegMoneyBillAlt,
  FaCalendar,
  FaBirthdayCake,
  FaRegEnvelope,
  FaMale,
  FaFemale,
  FaChair,
  FaPassport,
  FaMapMarkerAlt,
  FaHome,
  FaUsers,
  FaMoneyCheckAlt,
} from "react-icons/fa";
import { PiCreditCard } from "react-icons/pi";

const DetailsProfilePage = ({ user }: { user: any }) => {
  const {
    firstName,
    lastName,
    phoneNumber,
    userFinancialInfo,
    createdAt,
    personalInfo,
    deviceInfo,
  } = user;

  const {
    accountNumber,
    accountBalance,
    accountType,
    currency,
    interestRate,
    creditLimit,
    overdraftLimit,
    withdrawalLimit,
    investmentPortfolio,
    creditScore,
    accountOpeningDate,
    lastUpdatedDate,
  } = userFinancialInfo || {};

  const {
    dateOfBirth,
    gender,
    nationality,
    otherPhoneNumber,
    passportId,
    email,
    fatherName,
    motherName,
    currentAddress,
    permanentAddress,
    maritalStatus,
    occupation,
  } = personalInfo || {};

  const {
    devicesId,
    devicesModel,
    devicesType,
    devicesVendor,
    browserName,
    browserVersion,
    engineName,
    engineVersion,
    osName,
    osVersion,
    cpuArchitecture,
    agentClient,
  } = deviceInfo || {};

  return (
    <div className="p-4">
      <div className="bg-secondary h-48 flex items-center justify-center rounded-xl mb-5 text-white">
        <div>
          <Avatar src="/user.jpg" className="w-28 h-28 text-large" />
          <div>
            <p className="font-bold text-lg  text-center">{`${firstName || ""} ${
              lastName || ""
            }`}</p>
            <p className=" text-center">
              {accountType === "current" ? "Current" : "Savings"}
            </p>
          </div>
        </div>
      </div>

      <div className="flex items-center gap-x-1">
        <FaRegMoneyBillAlt className="text-xl text-secondary mr-2" />
        <p className="font-semibold">Account Number: </p>
        <p className="text-gray-600">{accountNumber || ""}</p>
      </div>

      <div className="flex items-center  gap-x-1">
        <FaCalendar className="text-xl text-secondary mr-2" />
        <p className="font-semibold">Opening Date: </p>
        <p className="">
          {accountOpeningDate
            ? formatDate(accountOpeningDate, "MMMM dd, yyyy")
            : ""}
        </p>
      </div>

      <div className="flex items-center gap-x-1">
        <FaMobileAlt className="text-xl text-secondary mr-2" />
        <p className="font-semibold">Phone Number: </p>
        <p className="text-gray-600">{phoneNumber || ""}</p>
      </div>

      <div className="flex items-center gap-x-1">
        <FaBirthdayCake className="text-xl text-secondary mr-2" />
        <p className="font-semibold">Date of Birth: </p>
        <p className="text-gray-600">
          {dateOfBirth ? formatDate(dateOfBirth, "MMMM dd, yyyy") : ""}
        </p>
      </div>

      <div className="flex items-center gap-x-1">
        <FaRegEnvelope className="text-xl text-secondary mr-2" />
        <p className="font-semibold">Email: </p>
        <p className="text-gray-600">{email || ""}</p>
      </div>

      <div className="flex items-center gap-x-1">
        {gender === "Female" ? (
          <FaFemale className="text-xl text-secondary mr-2" />
        ) : (
          <FaMale className="text-xl text-secondary mr-2" />
        )}

        <p className="font-semibold">Gender: </p>
        <p className="text-gray-600">{gender || ""}</p>
      </div>

      <div className="flex items-center gap-x-1">
        <FaChair className="text-xl text-secondary mr-2" />
        <p className="font-semibold">Occupation: </p>
        <p className="text-gray-600">{occupation || ""}</p>
      </div>

      {/* Additional Fields */}
      <div className="flex items-center gap-x-1">
        <FaPassport className="text-xl text-secondary mr-2" />
        <p className="font-semibold">Passport ID: </p>
        <p className="text-gray-600">{passportId || ""}</p>
      </div>

      <div className="flex items-center gap-x-1">
        <FaUsers className="text-xl text-secondary mr-2" />
        <p className="font-semibold">Nationality: </p>
        <p className="text-gray-600">{nationality || ""}</p>
      </div>

      <div className="flex items-center gap-x-1">
        <FaMapMarkerAlt className="text-xl text-secondary mr-2" />
        <p className="font-semibold">Current Address: </p>
        <p className="text-gray-600">{currentAddress || ""}</p>
      </div>

      <div className="flex items-center gap-x-1">
        <FaHome className="text-xl text-secondary mr-2" />
        <p className="font-semibold">Permanent Address: </p>
        <p className="text-gray-600">{permanentAddress || ""}</p>
      </div>

      <div className="flex items-center gap-x-1">
        <FaMoneyCheckAlt className="text-xl text-secondary mr-2" />
        <p className="font-semibold">Account Balance: </p>
        <p className="text-gray-600">{accountBalance || ""}</p>
      </div>

      <div className="flex items-center gap-x-1">
        <PiCreditCard className="text-xl text-secondary mr-2" />
        <p className="font-semibold">Credit Limit: </p>
        <p className="text-gray-600">{creditLimit || ""}</p>
      </div>

      <div className="flex items-center gap-x-1">
        <FaRegMoneyBillAlt className="text-xl text-secondary mr-2" />
        <p className="font-semibold">Interest Rate: </p>
        <p className="text-gray-600">{interestRate || ""}</p>
      </div>

      <div className="flex items-center gap-x-1">
        <FaRegEnvelope className="text-xl text-secondary mr-2" />
        <p className="font-semibold">Other Phone Number: </p>
        <p className="text-gray-600">{otherPhoneNumber || ""}</p>
      </div>

      <div className="flex items-center gap-x-1">
        <FaBirthdayCake className="text-xl text-secondary mr-2" />
        <p className="font-semibold">Marital Status: </p>
        <p className="text-gray-600">{maritalStatus || ""}</p>
      </div>

      <div className="flex items-center gap-x-1">
        <FaHome className="text-xl text-secondary mr-2" />
        <p className="font-semibold">Permanent Address: </p>
        <p className="text-gray-600">{permanentAddress || ""}</p>
      </div>

      {/*----------------------- Device Info -----------------------*/}

      <div className="flex items-center gap-x-1">
        <FaMobileAlt className="text-xl text-secondary mr-2" />
        <p className="font-semibold">Device ID: </p>
        <p className="text-gray-600">{devicesId || ""}</p>
      </div>

      <div className="flex items-center gap-x-1">
        <FaUsers className="text-xl text-secondary mr-2" />
        <p className="font-semibold">Device Model: </p>
        <p className="text-gray-600">{devicesModel || ""}</p>
      </div>

      <div className="flex items-center gap-x-1">
        <FaRegMoneyBillAlt className="text-xl text-secondary mr-2" />
        <p className="font-semibold">Device Type: </p>
        <p className="text-gray-600">{devicesType || ""}</p>
      </div>

      <div className="flex items-center gap-x-1">
        <PiCreditCard className="text-xl text-secondary mr-2" />
        <p className="font-semibold">Device Vendor: </p>
        <p className="text-gray-600">{devicesVendor || ""}</p>
      </div>

      <div className="flex items-center gap-x-1">
        <FaRegEnvelope className="text-xl text-secondary mr-2" />
        <p className="font-semibold">Browser Name: </p>
        <p className="text-gray-600">{browserName || ""}</p>
      </div>

      <div className="flex items-center gap-x-1">
        <FaBirthdayCake className="text-xl text-secondary mr-2" />
        <p className="font-semibold">Browser Version: </p>
        <p className="text-gray-600">{browserVersion || ""}</p>
      </div>

      <div className="flex items-center gap-x-1">
        <FaHome className="text-xl text-secondary mr-2" />
        <p className="font-semibold">Engine Name: </p>
        <p className="text-gray-600">{engineName || ""}</p>
      </div>

      <div className="flex items-center gap-x-1">
        <FaMoneyCheckAlt className="text-xl text-secondary mr-2" />
        <p className="font-semibold">Engine Version: </p>
        <p className="text-gray-600">{engineVersion || ""}</p>
      </div>

      <div className="flex items-center gap-x-1">
        <PiCreditCard className="text-xl text-secondary mr-2" />
        <p className="font-semibold">OS Name: </p>
        <p className="text-gray-600">{osName || ""}</p>
      </div>

      <div className="flex items-center gap-x-1">
        <FaRegMoneyBillAlt className="text-xl text-secondary mr-2" />
        <p className="font-semibold">OS Version: </p>
        <p className="text-gray-600">{osVersion || ""}</p>
      </div>

      <div className="flex items-center gap-x-1">
        <FaRegEnvelope className="text-xl text-secondary mr-2" />
        <p className="font-semibold">CPU Architecture: </p>
        <p className="text-gray-600">{cpuArchitecture || ""}</p>
      </div>

      <div className="flex items-center gap-x-1">
        <FaBirthdayCake className="text-xl text-secondary mr-2" />
        <p className="font-semibold">Agent Client: </p>
        <p className="text-gray-600">{agentClient || ""}</p>
      </div>
    </div>
  );
};

export default DetailsProfilePage;
