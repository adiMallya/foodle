import { css, createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
*,
*::before,
*::after {
    margin: 0;
    padding: 0;
    border: 0;
    box-sizing: border-box;
}

html:focus-within {
    scroll-behavior: smooth;
}

body {
    overflow-x: hidden;
    min-height: 100vh;
    font-family: system-ui, "Segoe UI", Roboto, Helvetica, Arial, 
    sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    transition: all 0.50s linear;
    background-color: ${({ theme }) => theme.bgColor.primary};
}

h1, h2, h3, h4, h5, h6 {
    margin: 0;
    line-height: ${({ theme }) => theme.lineHeight.title};
    color: ${({ theme }) => theme.font.primary};
    font-weight: ${({ theme }) => theme.font.semibold};
}

p {
    font-size: ${({ theme }) => theme.font.sm};
    margin: 0.25rem 0;
    line-height: ${({ theme }) => theme.lineHeight.para};
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

*::placeholder{
    color: ${({ theme }) => theme.font.secondary};
}
`;

const FLEX = (
    display = 'flex',
    align = null,
    justify = null,
    direction = null,
    wrap = null,
) => css`
    display: ${display};
    align-items: ${align};
    justify-content: ${justify};
    flex-direction: ${direction};
    flex-wrap: ${wrap ? 'wrap' : null};
`;

const TRUNCATE_TEXT = (
    maxWidth = null,
) => css`
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    max-width: ${maxWidth};
`;

const CLAMP_TEXT = (
    lines = 3,
) => css`
    display: -webkit-box;
    -webkit-line-clamp: ${lines};
    -webkit-box-orient: vertical;
    overflow: hidden;
`;

const FADE_ANIMATION_IN = css`
  opacity: 0;
  animation: fadeAnimationIn 160ms ease forwards;
  @keyframes fadeAnimationIn {
    to {
      opacity: 1;
    }
  }
`;

export { GlobalStyles, FLEX, TRUNCATE_TEXT, CLAMP_TEXT, FADE_ANIMATION_IN };