import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  html, body {
    min-height: 100vh;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;

    ::selection {
      background: ${(props) => props.theme.fill6};
    }
  }
`

export const themes = {
  dark: {
    blue: {
      fill1: '#000921',
      fill2: '#011842',
      fill3: '#215D9A',
      fill4: '#6186BD',
      fill5: '#8BC9F6',
      fill6: '#BEE4FF',
    },
  },
  light: {
    // baaaaaad theme
    black: {
      fill1: '#DBDBDB',
      fill2: '#BBBBBB',
      fill3: '#818181',
      fill4: '#515151',
      fill5: '#161616',
      fill6: '#090909',
    },
  },
}
