import { styled, css } from "styled-components";
import { FLEX } from "src/styles";

const size = {
    sm: css`
        height: 2rem;
        width: 2rem;
    `,

    md: css`
        height: 4rem;
        width: 4rem;
    `,

    lg: css`
        height: 8rem;
        width: 8rem;
    `,

    default: css`
        height: 2rem;
        width: 2rem;
    `
};

const getSize = (p) => size[p.size] || size.default;

const AvatarWrapper = styled.span`
    ${(p) => getSize(p)};
    border-radius: 50%;
    overflow: hidden;

    background-color: ${({ theme }) => theme.color.primary};
    cursor: pointer;
`;

const AvatarImage = styled.img`
    height: 100%;
    object-fit: cover;
`;

const AvatarText = styled.span`
    height: 100%;
    width: 100%;
    font-size: 0.8rem;
    ${FLEX("flex", "center", "center")}
    color: ${({ theme }) => theme.font.primary};
`;

export { AvatarWrapper, AvatarImage, AvatarText };