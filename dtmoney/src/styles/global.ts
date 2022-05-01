import { globalCss } from './stitches.config';

export const globalStyle = globalCss({
  '*': {
    margin: 0,
    padding: 0,
    boxSizing: 'border-box',
  },

  '@font-face': [
    {
      /* poppins-regular - latin */ 
      fontFamily: 'Poppins',
      fontStyle: 'normal',
      fontWeight: 400,
      src: "url('../fonts/poppins-v19-latin-regular.woff2')",
    },
    {
      /* poppins-500 - latin */ 
      fontFamily: 'Poppins',
      fontStyle: 'normal',
      fontWeight: 500,
      src: "url('../fonts/poppins-v19-latin-500.woff2')",
    },
    {
      /* poppins-600 - latin */ 
      fontFamily: 'Poppins',
      fontStyle: 'normal',
      fontWeight: 600,
      src: "url('../fonts/poppins-v19-latin-600.woff2')",
    },
  ],

  ':root': {
    fontSize: '62.5%', // 1REM equal to 10px

    // ...Object.keys(theme).reduce(
    //   (varSet) => ({
    //     ...varSet,
    //   }),
    //   {},
    // ),
  },

  body: {
    fontFamily: '$poppins',
    '-webkit-font-smoothing': 'antialiased',
    background: '$background',
    fontSize: '$1',
  },

  h1: {
    fontWeight: '$semiBold'
  },
  h2: {
    fontWeight: '$semiBold'
  },
  h3: {
    fontWeight: '$semiBold'
  },
  h4: {
    fontWeight: '$semiBold'
  },
  h5: {
    fontWeight: '$semiBold'
  },
  h6: {
    fontWeight: '$semiBold'
  },
  strong: {
    fontWeight: '$semiBold'
  }, 

  button: {
    cursor: 'pointer',
  },
});
