import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
*,
*::before,
*::after {
    box-sizing: border-box;
}

html:focus-within {
    scroll-behavior: smooth;
}

body {
    margin: 0;
    padding: 0;
    overflow-x: hidden;
    min-height: 100vh;
}

ul {
    list-style: none;
    padding-inline-start: none;
}
li {
    list-style-type: none;
}

a {
    text-decoration: none;
}
a:active,
a:focus,
button:focus {
  box-shadow: none !important;
}

img {
    height: auto;
    width: 100%;
    display: block;
}
`