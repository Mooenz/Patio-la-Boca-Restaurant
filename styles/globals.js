import { createGlobalStyle } from 'styled-components';
import theme from '../constant/theme';

const { dark, white } = theme;

const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }

  html,
  body {
    font-family: 'Poppins', sans-serif;
    background-color: ${dark};
    color: ${white};
  }

  a {
    display: block;
    color: ${white};
    text-decoration: none;
  }

  li {
    list-style: none;
  }
`;

export default GlobalStyles;
