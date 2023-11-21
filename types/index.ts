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
  userToken: string;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
  setUserToken: React.Dispatch<React.SetStateAction<string>>;
  login: (phoneNumber: string, otp: string) => void;
  setPin: (userId: string, userPin: string) => void;
  logout: () => void;
  sendOTP: (phoneNumber: string) => void;
}

export { HeaderProps, CardTransactionProps, AuthContextType };
