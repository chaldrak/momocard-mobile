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

export { HeaderProps, CardTransactionProps };
