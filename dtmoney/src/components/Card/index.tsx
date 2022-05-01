import { ComponentProps, ElementType } from 'react';

import { Paragraph } from '../Paragraph';
import { Strong } from '../Strong';

import * as S from './styles';

type CardProps = ComponentProps<typeof S['Container']> & {
  title: 'Income' | 'Outcome' | 'Total';
  value: string;
  icon: ElementType;
  color?: 'default' | 'white';
}

export function Card({ title = 'Income', value, icon: Icon, background = 'default', color = 'default', ...props }: CardProps) {
  return (
    <S.Container {...props} background={background}>
      <S.Header>
        <Paragraph color={color}>{title}</Paragraph>
        <Icon />
      </S.Header>

      <Strong color={color}>{value}</Strong>
    </S.Container>
  )
}