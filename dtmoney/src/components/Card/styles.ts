import { styled } from '../../styles';

export const Container = styled('div', {
  br: '$4',
  px: '$24',
  py: '$24',
  width: '100%',
  boxShadow: '0 0.2rem 0.6rem rgba(0, 0, 0, 0.1), 0 0.2rem 0 rgba(0, 0, 0, 0.03)',

  transition: 'transform 0.3s ease-in-out',

  '&:hover': {
    transform: 'translateY(-0.6rem)',
  }
}, {
  variants: {
    background: {
      default: {
        backgroundColor: '$white',
      },
      green: {
        backgroundColor: '$secondary',
      },
    },
  },
});

export const Header = styled('header', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between'
});

export const Image = styled('img', {
  width: '3.2rem',
  height: '3.2rem'
});

export const Price = styled('strong', {
  display: 'block',
  fontSize: '$3',
  color: '$titles',
  fontWeight: '$medium',
  marginTop: '$16'
});