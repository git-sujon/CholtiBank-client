export enum UserRole {
  user,
  admin,
  loan_officer,
  customer_service_representative
}

export enum AccountStatus {
  active,
  inActive
}



export enum TransactionTypeEnum {
  Deposit,
  Withdrawal,
  Transfer,
  Mobile_Recharge,
}

export enum DepositSourceEnum {
  bank_transfer,
  credit_card,
  atm,
  agent,
}

export enum WithdrawSourceEnum {
  agent,
  atm,
}

export enum TransferSourceEnum {
  Cholti_to_Cholti,
  NPSB,
  EFT,
  RTGS,
  Cash_by_code,
  BKash,
  Nagad,
  Prepaid_Card,
  Binimoy,
}

export enum SimTypeEnum {
  Prepaid,
  Postpaid,
}

export enum MobileOperatorEnum {
  Grameenphone,
  Robi,
  Banglalink,
  Airtel,
  Teletalk,
}


export enum LoanStatus {
  PENDING,
  APPROVED,
  ACTIVE,
  CLOSED
}