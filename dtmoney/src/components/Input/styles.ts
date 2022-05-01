import { styled } from '../../styles';

export const Container = styled('input', {
  width: '100%',
  height: '6.4rem',
  px: '$24',
  fontSize: '$1',
  color: '$texts',
  background: '#E7E9EE',
  border: '1px solid #d7d7d7',
  br: '$4',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  '&::placeholder': {
    fontSize: '$1',
    color: '$texts',
  }
});

