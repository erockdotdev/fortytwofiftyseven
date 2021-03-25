import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

 /**
  * =================
  *     FONTS
  * =================
  */

  /* @font-face {
    font-family: 'radnika_next';
    src: url('/static/radnikanext-medium-webfont.woff2')format('woff2');
    font-weight: normal;
    font-style: normal;
  }  */

 /**
  * ===================
  *     Typography
  * ===================
  */

  /* TBD */

 /**
  * ==================
  *     Variables
  * ==================
  */
  html{
    --red: #ff1234;
    --black: #393939;
    --gray: #3a3a3a;
    --lightGray: #e1e1e1;
    --blurp: #2de708;
    --offWhite: #ededed;
    --maxWidth: 1000px;
    --bs: 0 12px 24px 0 rgba(0,0,0,0.9); 
  }
 /**
  * =====================
  *     Global Styles
  * =====================
  */
  *, *:before, *:after {
    box-sizing: border-box;
  }
  body {
    //font-family: 'radnika_next', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif,-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    padding: 0;
    margin: 0;
    font-size: 10px;  
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
  button {
    background: transparent;
    box-shadow: 0px 0px 0px transparent;
    border: 0px solid transparent;
    text-shadow: 0px 0px 0px transparent;
    margin: 0;
    padding: 0;
    width: auto;
    overflow: visible;
    color: inherit;
    font: inherit;
    line-height: normal;
    -webkit-font-smoothing: inherit;
    -moz-osx-font-smoothing: inherit;
  }
  button:hover {
    background: transparent;
    box-shadow: 0px 0px 0px transparent;
    border: 0px solid transparent;
    text-shadow: 0px 0px 0px transparent;
    cursor: pointer;
  }
  button:active {
    outline: none;
    border: none;
  }
  button:focus {
    outline: 0;
  }}
`;

// media query example

// const Test = styled.div`
//   width: 100px;
//   height: 100px;
//   @media ${device.mobileL} {
//     background-color: blue;
//   }

//   @media ${device.laptop} {
//     background-color: green;
//   }

//   @media ${device.desktop} {
//     background-color: red;
//   }
// `;

export default GlobalStyles;
