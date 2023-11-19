interface HeaderProps {
  title: string;
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
  userToken: string;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
  setUserToken: React.Dispatch<React.SetStateAction<string>>;
  login: (phoneNumber: string, otp: string) => void;
  logout: () => void;
  sendOTP: (phoneNumber: string) => void;
}

export { HeaderProps, CardTransactionProps, AuthContextType };
