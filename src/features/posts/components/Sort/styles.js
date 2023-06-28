import { styled } from "styled-components";
import { FLEX } from "src/styles";

const SortContainer = styled.div`
    ${FLEX("flex", "center", "space-between")};
    width: 100%;
    padding: 0.625rem 1rem;
    border: 1px solid ${({ theme }) => theme.border.solid};
    background-color: ${({ theme }) => theme.bgColor.primary};

    span {
        color: ${({ theme }) => theme.font.primary};
        font-size: ${({ theme }) => theme.font.sm};
    }
`;

const SortBar = styled.div`
    position: relative;
`;

export { SortContainer, SortBar };