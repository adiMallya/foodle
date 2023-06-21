import { css, styled } from "styled-components";
import { Link } from "react-router-dom";

export const BaseLink = styled(Link)`
    text-decoration: none;
    color: ${(p) => css`
        ${p.color ? p.color : p.theme.font.primary}
    `};
`;