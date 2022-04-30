import { styled } from '../../styles';

export const Container = styled('img', {}, {
  variants: {
    size: {
      default: {
        width: '3.2rem',
        height: '3.2rem',
      },
      small: {
        width: '2.4rem',
        height: '2.4rem',
      },
    },
  }
});