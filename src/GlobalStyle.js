import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'T.C.SYSTEM';
    src: url('/assets/fonts/TCSYSTEM.eot');
    src: url('/assets/fonts/TCSYSTEM.eot?#iefix') format('embedded-opentype'),
         url('/assets/fonts/TCSYSTEM.woff2') format('woff2'),
         url('/assets/fonts/TCSYSTEM.woff') format('woff'),
         url('/assets/fonts/TCSYSTEM.ttf') format('truetype');
    font-weight: normal;
    font-style: normal;
  }
  html, body {
    min-height: 100vh;
    margin: 0;
  }
`;

export const themes = {
  dark: {
    blue: {
      fill1: '#000921',
      fill2: '#011842',
      fill3: '#215D9A',
      fill4: '#6186BD',
      fill5: '#8BC9F6',
      fill6: '#BEE4FF'
    }
  }
};
