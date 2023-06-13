import { css, styled } from "styled-components";

const size = {
    sm: css`
        padding: 0.3rem 0.7rem;
        font-size: 0.9rem;
    `,

    lg: css`
        padding: 0.75rem 1.5rem;
        font-size: 1.1rem;
        min-width: 80px;
    `,

    default: css`
        padding: 0.5rem 1rem;
        font-size: 1em;
    `
}

const variants = {
    primaryOutline: css`
        color: ${({ theme }) => theme.font.primary};
        border: 1px solid ${({ theme }) => theme.color.primary};
    `,

    secondarySolid: css`
        color: ${({ theme }) => theme.font.secondary};
        background-color: ${({ theme }) => theme.color.secondary};
    `,

    secondaryOutline: css`
        color: ${({ theme }) => theme.color.secondary};
        border: 1px solid ${({ theme }) => theme.color.secondary};
    `,

    icon: css`
        background-color: transparent;
        ${(p) => p.hoverIcon && css`
            &:hover {
                background: ${p.hoverIcon};
                border-radius: 9999px;
            }
        `}
    `,

    default: css`
        color: ${({ theme }) => theme.font.primary};
        background-color: ${({ theme }) => theme.color.primary};
    `
}

const getSize = (p) => size[p.size] || size.default;
const getVariant = (p) => variants[p.variant] || variants.default;

export const Button = styled.button`
    width: fit-content;
    height: fit-content;
    background-color: transparent;
    border: none;
    text-decoration: none;
    text-align: center;
    font-weight: ${({ theme }) => theme.font.semibold};
    outline: none;
    opacity: 0.9;
    cursor: pointer;

    &:hover {
        opacity: 1;
    }

    &:focus {
        box-shadow: transparent;
    }

    &:disabled {
        cursor: not-allowed;
        opacity: 0.6;
    }

    ${(p) => getSize(p)}

    ${(p) => getVariant(p)}

    ${(p) => p.fullWidth && css`
        width: 100%;
    `}

    border-radius: ${(p) => css`
        ${p.rounded ? '9999px' : '0.3rem'}
    `};
`;
