interface HeaderProps {
  title: string;
  bgColor?: string;
  leftUrl?: any;
}

interface CardTransactionProps {
  _id: string;
  type: string;
  createdAt: string;
  amount: number;
  payeeNote: string;
  payerMessage: string;
}

// {"__v": 0, "_id": "65603e7d815b52ef069579cd", "amount": 2500, "createdAt": "2023-11-24T06:11:09.607Z", "currency": "EUR", "externalId": "11fd4eda-21d0-41e9-b428-0d781fe1e4f8", "partyId": "97075296", "partyIdType": "MSSDN", "payeeNote": "Recharge de ma carte", "payerMessage": "Recharge de ma carte", "transactionType": "refill", "user": "6560389c815b52ef0695799a"}

interface AuthContextType {
  loading: boolean;
  hasPin: boolean;
  userToken: string | null;
  user: UserType | undefined;
  phoneNumber: string;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
  setUserToken: React.Dispatch<React.SetStateAction<string | null>>;
  setPhoneNumber: React.Dispatch<React.SetStateAction<string>>;
  login: (phoneNumber: string, otp: string) => void;
  setPin: (phoneNumber: string, userPin: string) => void;
  logout: () => void;
  sendOTP: (phoneNumber: string) => void;
}

interface UserType {
  _id: string;
  phoneNumber: string;
  userPin: string;
  hasPin: boolean;
  userName: string;
  userGivenName: string;
  userFamilyName: string;
  userBirthdate: string;
  userLocale: string;
  userGender: string;
  createdAt: string;
  updateAt: string;
  __v: number;
}

export type { HeaderProps, CardTransactionProps, AuthContextType, UserType };
