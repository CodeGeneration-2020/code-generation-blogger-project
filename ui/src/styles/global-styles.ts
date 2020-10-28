import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  html,
  body {
    height: 100%;
    width: 100%;
  }

  body {
    background: linear-gradient(180deg, #001642 -0.4%, #0B0D1F 21.09%, #0D0B18 49.71%, #0B0D1F 82.43%, #001642 97.77%);
    font-family: 'Helvetica Neue', Helvetica, Arial, 'Roboto', sans-serif;
  }

  #root{
    min-height:100%;
    max-width: 100vw; 
    overflow-x:hidden;
  }

  p,
  label {
    font-family: Georgia, Times, 'Times New Roman', serif;
    line-height: 1.5em;
  }

  input, select {
    font-family: inherit;
    font-size: inherit;
  }

  .stop-scrolling {
  height: 100%;
  overflow: hidden;
  }
`;
