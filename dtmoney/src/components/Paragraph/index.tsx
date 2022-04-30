import { ComponentProps } from 'react';
import * as S from './styles';

export type ParagraphProps = ComponentProps<typeof S['Container']> & {
  children: string;
}

export function Paragraph({ children, color = 'default', ...props }: ParagraphProps) {
  return <S.Container color={color} {...props}>{children}</S.Container>
}