import logo from '../../assets/logo.png';
import { Button } from '../Button';
import { Image } from '../Image';

import * as S from './styles'

export function Header() {
  return (
    <S.Container>
      <S.Content>
        <Image src={logo} alt='dt money' />

        <Button>Nova transação</Button>
      </S.Content>
    </S.Container>
  );
}