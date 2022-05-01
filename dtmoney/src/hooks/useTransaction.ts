import { useContext } from "react";
import { TransactionsContext } from "../contexts/Transactions";

export function useTransaction() {
  const context = useContext(TransactionsContext);

  return context;
}