import { styled } from '../../styles';

export const Container = styled('div', {
  marginTop: '$64',
  width: '100%'
});

export const Table = styled('table', {
  width: '100%',
  borderSpacing: '0 0.8rem', 
});

export const Tbody = styled('tbody', {
  width: '100%',
});

export const Th = styled('th', {
  color: '$texts',
  fontSize: '$1',
  textAlign: 'left',
  lineHeight: '2.4rem',
  fontWeight: '$regular',
  py: '$16',
  px: '$32',
});

export const Td = styled('td', {
  py: '$16',
  px: '$32',
  border: 'none',
  background: '$white',
  br: '$4',
  color: '$texts',
  position: 'relative',
}, {
  variants: {
    ribbon: {
      left: {
        color: '$titles',

        '&::after': {
          content: '',
          position: 'absolute',
          top: 0,
          left: 0,
          bottom: 0,
          width: '0.4rem',
          background: '$primary',
          borderRadius: '0.4rem 0 0 0.4rem',
        }
      }
    },

    type: {
      income: {
        color: '$secondary'
      },
      outcome: {
        color: '$red200'
      }
    }
  }
});