export interface IUser {
  firstName: string;
  lastName: string;
  phoneNumber: string;
  password: string;
  pin: string;
  nationalId: string;
  role: string;
}

export interface IJwtDecoded {
  _id: string;
  phoneNumber: string;
  role: string;
  iat: number;
  exp: number;
}
