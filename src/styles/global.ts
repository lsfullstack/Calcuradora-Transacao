import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  :root {
    --black: #000000;
    --white: #ffffff;
    --blue-1: #e6f3ff;
    --blue-2: #bdd8fb;
    --blue-3: #67a1fd;
    --blue-4: #0062ff;
    --grey-1: #f5f5f5;
    --grey-2: #d9d9d9;
    --grey-3: #7f7e7e;
    --grey-4: #3f3f3f;
  }

  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
  }

  body, html {
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
  }
`;
