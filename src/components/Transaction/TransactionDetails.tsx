import React from "react";

const TransactionDetails = ({ transaction }) => {

  const renderDepositDetails = () => {
    const {
      amount,
      depositSource,
      bankName,
      bankAccountNo,
      creditCardName,
      creditCardNumber,
      createdAt
    } = transaction.deposit;

    return (
      <div className="mt-4"> 
        <h3 className="text-lg font-medium mb-2">Deposit Details</h3>
        
        <div className="grid grid-cols-2 gap-4">
          <div>
            <p className="font-semibold">Amount:</p> 
            <p className="text-gray-600">{amount}</p>
          </div>

          <div>
            <p className="font-semibold">Deposit Source:</p>
            <p className="text-gray-600">{depositSource}</p>
          </div>

          <div>
            <p className="font-semibold">Bank Name:</p>
            <p className="text-gray-600">{bankName}</p>
          </div>

          <div>
            <p className="font-semibold">Bank Account No:</p>
            <p className="text-gray-600">{bankAccountNo}</p>
          </div>

          <div>
            <p className="font-semibold">Credit Card Name:</p>
            <p className="text-gray-600">{creditCardName}</p>
          </div>
        
          <div>
            <p className="font-semibold">Credit Card Number:</p>
            <p className="text-gray-600">{creditCardNumber}</p>  
          </div>

          <div> 
            <p className="font-semibold">Created At:</p>
            <p className="text-gray-600">{createdAt}</p>
          </div>
        </div>
      </div>
    );
  };

  const renderWithdrawalDetails = () => {
    const {
      amount, 
      withdrawSource,
      atmId,
      agentId,
      createdAt
    } = transaction.withdrawal;

    return (
      <div className="mt-4">
        <h3 className="text-lg font-medium mb-2">
          Withdrawal Details
        </h3>
        
        <div className="grid grid-cols-2 gap-4">
          <div>
            <p className="font-semibold">Amount:</p>
            <p className="text-gray-600">{amount}</p>
          </div>

          <div> 
            <p className="font-semibold">Withdraw Source:</p>
            <p className="text-gray-600">{withdrawSource}</p>
          </div>

          <div>
            <p className="font-semibold">ATM ID:</p>
            <p className="text-gray-600">{atmId}</p>  
          </div>

          <div>
            <p className="font-semibold">Agent ID:</p>
            <p className="text-gray-600">{agentId}</p>
          </div>

          <div>
            <p className="font-semibold">Created At:</p>
            <p className="text-gray-600">{createdAt}</p>
          </div>
        </div>
      </div>
    );
  };

  const renderRechargeDetails = () => {
    const {
      amount,
      phoneNumber,
      mobileOperators,
      simType, 
      createdAt
    } = transaction.mobileRecharge;

    return (
      <div className="mt-4">
        <h3 className="text-lg font-medium mb-2">
          Mobile Recharge Details  
        </h3>
        
        <div className="grid grid-cols-2 gap-4">
          <div>
            <p className="font-semibold">Amount:</p>
            <p className="text-gray-600">{amount}</p>
          </div>

          <div>
            <p className="font-semibold">Phone Number:</p>
            <p className="text-gray-600">{phoneNumber}</p>
          </div>

          <div>
            <p className="font-semibold">Mobile Operator:</p>
            <p className="text-gray-600">{mobileOperators}</p>
          </div>

          <div>
            <p className="font-semibold">SIM Type:</p> 
            <p className="text-gray-600">{simType}</p>
          </div>
        
          <div>
            <p className="font-semibold">Created At:</p>
            <p className="text-gray-600">{createdAt}</p>
          </div>
        </div>  
      </div>
    );
  };

  return (
    <div className="bg-white shadow-lg rounded-lg p-6">
      {/* Transaction Summary */}

      {transaction.transactionType === "Deposit" && 
        renderDepositDetails()  
      }

      {transaction.transactionType === "Withdrawal" && 
        renderWithdrawalDetails()
      }

      {transaction.transactionType === "Mobile_Recharge" &&
        renderRechargeDetails()
      }
    </div>
  );  
};

export default TransactionDetails;