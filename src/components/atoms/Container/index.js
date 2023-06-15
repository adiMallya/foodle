import { styled } from "styled-components";

import { FLEX } from "src/styles";

export const FlexContainer = styled.div`
    width: ${({ w }) => w || 100}vw;
    height: ${({ h }) => h || 100}vh;
    margin: ${({ m }) => m || 0}rem;
    padding: ${({ p }) => p || 0}rem;
    background-color: ${({ bg, theme }) => bg || theme.bgColor.secondary};
    ${({ align, justify, direction, wrap }) => FLEX(align, justify, direction, wrap)}
`;