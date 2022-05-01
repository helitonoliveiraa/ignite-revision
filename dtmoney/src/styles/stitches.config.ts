import { createStitches, ScaleValue } from '@stitches/react';

export const { styled, css, theme, globalCss } = createStitches({
  theme: {
    colors: {
      purple300: '#5429CC',
      purple200: '#6933FF',
      green300: '#33CC95',
      red200: '#E52E4D',
      white: '#FFFFFF',
      gray50: '#F0F2F5',
      gray400: '#969CB2',
      gray700: '#363F5F',

      //Alias
      primary: `$purple300`,
      secondary: `$green300`,
      background: `$gray50`,
      titles: `$gray700`,
      texts: `$gray400`,
    },
    fontSizes: {
      1: '1.6rem',
      2: '2.4rem',
      3: '3.6rem',
    },
    fonts: {
      poppins: 'Poppins, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Open Sans, Helvertica Neue, sans-serif',
    },
    fontWeights: {
      'regular': 400,
      'medium': 500,
      'semiBold': 600,
    },
    space: {
      4: '0.4rem',
      8: '0.8rem',
      12: '1.2rem',
      16: '1.6rem',
      20: '2rem',
      24: '2.4rem',
      28: '2.8rem',
      32: '3.2rem',
      36: '3.6rem',
      40: '4rem',
      44: '4.4rem',
      48: '4.8rem',
      64: '6.4rem',
    },
    radii: {
      4: '0.4rem',
      8: '0.8rem',
      12: '1.2rem',
      16: '1.6rem',
      20: '2rem',
      24: '2.4rem',
      28: '2.8rem',
      32: '3.2rem',
    }
  },

  utils: {
    mx: (value: ScaleValue<'space'>) => ({
      marginLeft: value,
      marginRight: value,
    }),
    my: (value: ScaleValue<'space'>) => ({
      marginLeft: value,
      marginRight: value,
    }),
    px: (value: ScaleValue<'space'>) => ({
      paddingLeft: value,
      paddingRight: value,
    }),
    py: (value: ScaleValue<'space'>) => ({
      paddingTop: value,
      paddingBottom: value,
    }),
    br: (value: ScaleValue<'radii'>) => ({
      borderRadius: value,
    }),
  }
});
