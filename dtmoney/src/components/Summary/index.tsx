import { Card } from '../Card';

import { IncomeIcon, OutcomeIcon, TotalIcon } from '../../assets/icons';

import * as S from './styles';
import { useTransaction } from '../../hooks/useTransaction';
import { formatPrice } from '../../utils';

export function Summary() {
  const { transactions } = useTransaction();

  const { income, outcome, total } = transactions.reduce((accumulator, transaction) => {
    if(transaction.type === 'income') {
      accumulator.income += transaction.amount;
      accumulator.total += transaction.amount;
    } else {
      accumulator.outcome += transaction.amount;
      accumulator.total -= transaction.amount;
    }

    return  accumulator;
  }, {
    income: 0,
    outcome: 0,
    total: 0,
  });

  const summary = {
    income: formatPrice({ amount: income }),
    outcome: formatPrice({ amount: outcome }),
    total: formatPrice({ amount: total }),
  }

  return (
    <S.Container>
      <Card title='Income' icon={IncomeIcon} value={summary.income} />
      <Card title='Outcome' icon={OutcomeIcon} value={summary.outcome} />
      <Card background='green' color='white' title='Total' icon={TotalIcon} value={summary.total} />
    </S.Container>
  )
}