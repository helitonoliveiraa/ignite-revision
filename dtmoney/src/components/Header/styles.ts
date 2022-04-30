import { styled } from '../../styles';

export const Container = styled('header', {
  background: '$primary',
  width: '100%',
  height: '21.2rem'
});

export const Content = styled('div', {
  maxWidth: '1160px',
  margin: '0 auto',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  paddingTop: '$32',
  px: '$20'
});