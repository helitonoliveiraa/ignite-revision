import { Card } from '../Card';
import incomeImg from '../../assets/icons/income.svg';
import outcomeImg from '../../assets/icons/outcome.svg';
import totalImg from '../../assets/icons/total.svg';

import * as S from './styles';

export function Summary() {
  return (
    <S.Container>
      <Card title='Income' icon={incomeImg} value='R$ 17.400,00' />
      <Card title='Outcome' icon={outcomeImg} value='R$ 17.400,00' />
      <Card background='green' color='white' title='Total' icon={totalImg} value='R$ 17.400,00' />
    </S.Container>
  )
}