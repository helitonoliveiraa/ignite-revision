import { styled } from '../../styles';

export const Container = styled('strong', {
  display: 'block',
  fontSize: '$3',
  fontWeight: '$medium',
  marginTop: '$16'
}, {
  variants: {
    color: {
      default: {
        color: '$titles',
      },
      white: {
        color: '$white',
      },
    },
  },
});