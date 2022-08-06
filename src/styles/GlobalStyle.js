import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
* {
  box-sizing: border-box;
  font-family: 'Robot', sans-serif;
}

${reset}
`;

export default GlobalStyle;
