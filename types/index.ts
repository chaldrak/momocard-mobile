interface HeaderProps {
  title: string;
  bgColor?: string;
  leftUrl?: any;
}

interface CardTransactionProps {
  id: number;
  type: string;
  date: string;
  amount: number;
  description: string;
}

interface AuthContextType {
  loading: boolean;
  hasPin: boolean;
  userToken: string | null;
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
