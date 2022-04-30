import { ComponentProps } from 'react';
import * as S from './styles';

type ImageProps = ComponentProps<typeof S['Container']> & {
  src: string;
  alt: string;
}

export function Image({ src, alt, size, ...props }: ImageProps) {
  return <S.Container src={src} alt={alt} size={size} {...props} />
}