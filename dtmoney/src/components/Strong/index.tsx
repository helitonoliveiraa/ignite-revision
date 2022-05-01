import { ComponentProps } from 'react';
import * as S from './styles';

type StrongProps = ComponentProps<typeof S['Container']> & {
  children: string;
}

export function Strong({ children, color = 'default', size = 'default', ...props }: StrongProps) {
  return <S.Container color={color} size={size} {...props}>{children}</S.Container>
}