import { styled } from '../../styles';

export const Container = styled('div', {
  width: '100%',
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gap: '$28',
  marginTop: '-7rem'
});