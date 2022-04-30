import { ComponentProps } from 'react';

import { Paragraph } from '../Paragraph';
import { Strong } from '../Strong';
import { Image } from '../Image';

import * as S from './styles';

type CardProps = ComponentProps<typeof S['Container']> & {
  title: 'Income' | 'Outcome' | 'Total';
  value: string;
  icon: string;
  color?: 'default' | 'white';
}

export function Card({ title = 'Income', value, icon, background = 'default', color = 'default', ...props }: CardProps) {
  return (
    <S.Container {...props} background={background}>
      <S.Header>
        <Paragraph color={color}>{title}</Paragraph>
        <Image src={icon} alt={title} size='default' />
      </S.Header>

      <Strong color={color}>{value}</Strong>
    </S.Container>
  )
}