import { styled } from '../../styles';

export const Container = styled('p', {
  fontSize: '$1',
  color: '$titles'
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