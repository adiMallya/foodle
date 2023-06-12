import { css, createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
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
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    transition: all 0.50s linear;
}

h1, h2, h3, h4, h5, h6 {
    margin: 0.625rem 0;
    line-height: ${({ theme }) => theme.lineHeight.title};
    font-weight: ${({ theme }) => theme.fontWeight.semibold};
}

p {
    font-size: ${({ theme }) => theme.fontSizes[0]}
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