import { styled } from "styled-components";

import { FLEX } from "src/styles";

export const FlexContainer = ({
    w = '100vw',
    h = '100vh',
    m = 0,
    p = 0,
    bgColor = null,
    align = null,
    justify = null,
    direction = null,
    wrap = null
}) => styled.div`
    width: ${w};
    height: ${h};
    margin: ${m}rem;
    padding: ${p}rem;
    background-color: ${bgColor};
    ${FLEX(align, justify, direction, wrap)}
`;