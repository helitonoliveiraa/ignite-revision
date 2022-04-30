import { styled } from '../../styles';

export const Container = styled('button', {
  appearance: 'none',
  background: '$purple200',
  color: '$white',
  fontSize: '$1',
  fontWeight: '$semiBold',
  py: '$12',
  px: '$32',
  border: 'none',
  br: '$4',

  transition: 'filter 0.2s',

  '&:hover': {
    filter: 'brightness(0.9)',
  }
});
