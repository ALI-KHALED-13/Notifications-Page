import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Plus Jakarta Sans', sans-serif;
  }
  *::-webkit-scrollbar {
    width: 0.5rem;
  }
  *::-webkit-scrollbar-thumb {
    border-radius: 1rem;
  }
  html {
    font-size: 62.5%;
    scroll-behavior: smooth;
    --Red: hsl(1, 90%, 64%);
    --Blue: hsl(219, 85%, 26%);
    --darkBlue: hsl(224, 21%, 14%);
    --lightGreyishBlue1: hsl(211, 68%, 94%);
    --lightGreyishBlue2: hsl(205, 33%, 90%);
    --greyishBlue: hsl(219, 14%, 63%);
    --darkGreyishBlue: hsl(219, 12%, 42%);
  }
  a {
    text-decoration: none;
    cursor: pointer;
  }
  

  .container {
    background-color: #f9fafe;
    display: grid;
    place-items: center;
    min-height: 100vh;
  }
  .attribution { font-size: 1.1rem; text-align: center; }
  .attribution a { color: hsl(228, 45%, 44%); }
`;