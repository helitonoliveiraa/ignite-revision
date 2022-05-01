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
}, {
  variants: {
    large: {
      default: {
        width: '100%',
        height: '6.4rem',
        color: '$white',
        background: '$secondary',

        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }
    },
    withIcon: {
      default: {
        width: '100%',
        height: '6.4rem',
        px: '$64',
        color: '$titles',
        fontWeight: '$regular',
        background: 'transparent',
        border: '1px solid #d7d7d7',

        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: '$16',

        '& svg': {
          width: '2.4rem',
          height: '2.4rem'
        }
      },
    },
    income: {
      true: {
        background: '#D1DFD7', 
      },
    },
    outcome: {
      true: {
        background: '#E6D4D7'
      },
    }
  }
});
