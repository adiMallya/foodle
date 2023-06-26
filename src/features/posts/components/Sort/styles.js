import { styled, css } from "styled-components";
import { FLEX } from "src/styles";
import { Button } from "src/components/atoms";

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

const SortDropdown = styled.div`
    position: absolute;
    right: 0;
    z-index: ${({ theme }) => theme.z[7]};

    ${FLEX("flex", "flex-start", null, "column")};
    padding: 0.625rem 0.125rem;
    background-color: ${({ theme }) => theme.bgColor.primary};
    border: 1px solid ${({ theme }) => theme.border.solid};
    border-radius: ${({ theme }) => theme.border.roundedMd};
`;

const SortOption = styled(Button)`
    color: ${({ theme }) => theme.font.color};
    display: flex;

    span{
        margin-left: 0.625rem;
        font-size: ${({ theme }) => theme.font.sm};
    }
`;

export { SortContainer, SortDropdown, SortBar, SortOption };