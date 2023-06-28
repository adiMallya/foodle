import { styled } from "styled-components";
import { Button } from "../Button";
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

const DropdownOption = styled(Button)`
    color: ${({ theme }) => theme.font.color};
    display: flex;

    span{
        margin-left: 0.625rem;
    }
`;

export { Dropdown, DropdownOption };