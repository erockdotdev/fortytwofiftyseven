import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  /* @font-face{
    font-family: 'radnika_next';
    src: url('/static/radnikanext-medium-webfont.woff2')format('woff2');
    font-weight: normal;
    font-style: normal;
  }  */
  html{
    --red: #ff1234;
    --black: #393939;
    --gray: #3a3a3a;
    --lightGray: #e1e1e1;
    --blurp: #2de708;
    --offWhite: #ededed;
    --maxWidth: 1000px;
    --bs: 0 12px 24px 0 rgba(0,0,0,0.9);

    font-size: 10px;  
    box-sizing: border-box;
  }
  *, *:before, *:after {
    box-sizing: border-box;
  }
  body {
    //font-family: 'radnika_next', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif,-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    padding: 0;
    margin: 0;
    font-size: 1.5rem;
    line-height: 1.6;
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu,
      Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
    font-size: 18px;
  }
  a {
    text-decoration: none;
    color: var(--black);
  }
  a:hover {
    text-decoration: underline;
    cursor: pointer;
  }
  img {
    max-width: 100%;
    display: block;
  }
  /* button {
    font-family: 'radnika_next', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif,-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  } */
`;

export default GlobalStyles;
