import { ComponentProps, ElementType } from 'react';

import * as S from './styles';

type ButtonProps = ComponentProps<typeof S['Container']> & {
  icon?: ElementType,
};

export function Button({ children, icon: Icon, ...props }: ButtonProps) {
  return(
    <S.Container {...props}>
      {!!Icon && <Icon />}
      {children}
    </S.Container>
  );
}
