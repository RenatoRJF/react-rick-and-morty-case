import { createGlobalStyle } from "styled-components";
import BackgroundImage from "../images/space-background.jpg";

const GlobalStyles = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
  }
  
  body {
    font-family: 'Creepster', cursive;
    font-style: regular;
    font-size: 16px;
    letter-spacing: 3px;
    background-image: url(${BackgroundImage});
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    background-attachment: fixed;
  }
`;

export default GlobalStyles;
