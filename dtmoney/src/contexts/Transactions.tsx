import { createContext, ReactNode, useEffect, useState } from 'react';

import { api } from '../services/api';
import { formatDate } from '../utils';

type Transaction = {
  id: string,
  title: string,
  amount: number,
  type: 'income' | 'outcome',
  category: string,
  createdAt: string,
}
type TransactionInput = Pick<Transaction, 'title' | 'amount' | 'type' | 'category'>;

type TransactionsContextData = {
  transactions: Array<Transaction>;
  createTransaction: ({ ...props }: TransactionInput) => Promise<void>;
}

type TransactionsProviderProps = {
  children: ReactNode;
}

export const TransactionsContext = createContext<TransactionsContextData>({} as TransactionsContextData);

export function TransactionsProvider({ children }: TransactionsProviderProps) {
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  useEffect(() => {
    loadTransactions();
  }, []);

  async function loadTransactions() {
    api.get('/transactions')
      .then((response) => {
        if (response.status === 200 && response.data?.transactions?.length > 0) {
          const formattedData = response.data.transactions.map((transaction: Transaction) => {
            return {
              ...transaction,
              amount: transaction.amount,
              createdAt: formatDate(transaction.createdAt),
            }
          });

          setTransactions(formattedData);
        }
      })
  }

  async function createTransaction(transaction: TransactionInput) {
    try {
  
      const { data } = await api.post('transactions', transaction);

      const response = data.transaction;

      const formattedResponse: Transaction = {
        ...response,
        amount: response.amount,
        createdAt: formatDate(response.createdAt),
      }
      
      setTransactions(prevState => [...prevState, formattedResponse]);      
    } catch (err) {
      console.log({err});
    }
  }

  return (
    <TransactionsContext.Provider value={{ transactions, createTransaction }}>
      {children}
    </TransactionsContext.Provider>
  );
}