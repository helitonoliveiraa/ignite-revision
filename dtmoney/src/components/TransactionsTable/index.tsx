import { useTransaction } from '../../hooks/useTransaction';
import { formatPrice } from '../../utils';

import * as S from './styles';

export function TransactionsTable() {
  const { transactions } = useTransaction();

  const formattedTransactions = transactions.map(transaction => {
    return {
      ...transaction,
      amount: formatPrice({
        amount: transaction.amount,
        type: transaction.type,
      }),
    }
  });

  return (
    <S.Container>
      <S.Table>
        <thead>
          <tr>
            <S.Th>Title</S.Th>
            <S.Th>Price</S.Th>
            <S.Th>Category</S.Th>
            <S.Th>Date</S.Th>
          </tr>
        </thead>

        <tbody>
          {formattedTransactions.map(transaction => (
            <tr key={transaction.id}>
              <S.Td ribbon='left'>{transaction.title}</S.Td>
              <S.Td type={transaction.type}>{transaction.amount}</S.Td>
              <S.Td>{transaction.category}</S.Td>
              <S.Td>{transaction.createdAt}</S.Td>
            </tr>
          ))}
        </tbody>
      </S.Table>
    </S.Container>
  )
}