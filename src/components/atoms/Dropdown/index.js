import { styled } from "styled-components";
import { FLEX } from "src/styles";

const Dropdown = styled.div`
    position: absolute;
    right: 0;
    z-index: ${({ theme }) => theme.z[7]};

    ${FLEX("flex", "flex-start", null, "column")};
    padding: 0.125rem;
    background-color: ${({ theme }) => theme.bgColor.primary};
    border: 1px solid ${({ theme }) => theme.border.solid};
    border-radius: ${({ theme }) => theme.border.roundedMd};
`;

const DropdownOption = styled.div`
    padding: 0.3rem 0.7rem;
    font-size: 0.85rem;
    color: ${({ theme }) => theme.font.primary};
    display: flex;

    cursor: pointer;
    span{
        margin-left: 0.625rem;
    }
`;

export { Dropdown, DropdownOption };