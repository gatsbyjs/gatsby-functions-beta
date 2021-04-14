const fontFamily = 'Inter, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif'
const theme = {
  colors: {
    text: '#222',
    background: '#fff',
    lightGray: '#efefef',
    purple: 'rebeccapurple'
  },
  fonts: {
    body: fontFamily,
    heading: fontFamily,
    monospace: 'Menlo, monospace',
  },
  fontSizes: [
    12, 14, 16, 20, 24, 32, 48, 64
  ],
  fontWeights: {
    body: 400,
    heading: 700,
    bold: 700,
  },
  lineHeights: {
    body: 1.5,
    heading: 1.125,
  },
  letterSpacings: {
    body: 'normal',
    caps: '0.2em',
  },
  styles: {
    root: {
      // uses the theme values provided above
      fontFamily: 'body',
      fontWeight: 'body',
    },
    main: {
      width: 960,
      maxWidth: '95%',
      marginLeft: 'auto',
      marginRight: 'auto'
    }
  },
}

export default theme;