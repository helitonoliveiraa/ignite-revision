import logo from '../../assets/logo.png';

import { Button } from '../Button';
import { Image } from '../Image';

import * as S from './styles';

type HeaderProps = {
  onOpenNewTransactionModal: () => void;
}

export function Header({ onOpenNewTransactionModal }: HeaderProps) {
  return (
    <S.Container>
      <S.Content>
        <Image src={logo} alt='dt money' />

        <Button onClick={onOpenNewTransactionModal}>Nova transação</Button>
      </S.Content>
    </S.Container>
  );
}