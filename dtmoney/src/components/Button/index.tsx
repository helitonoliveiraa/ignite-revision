import { ComponentProps } from 'react';

import * as S from './styles';

type ButtonProps = ComponentProps<typeof S['Container']>;

export function Button({ children, ...props }: ButtonProps) {
  return <S.Container {...props}>{children}</S.Container>;
}
