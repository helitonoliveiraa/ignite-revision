import { ComponentProps, InputHTMLAttributes } from 'react';
import * as S from './styles';

type InputProps = ComponentProps<typeof S['Container']> & InputHTMLAttributes<HTMLInputElement>;

export function Input({ ...props }: InputProps) {
  return (
    <S.Container {...props} />
  );
}