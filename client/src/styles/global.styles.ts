import {createGlobalStyle} from "styled-components";

export const GlobalStyles = createGlobalStyle`
  *, *::before, *::after {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    border: none;
    list-style: none;
    background: none;
  }

  ul, li {
    list-style: none;
  }
`