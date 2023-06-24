import { styled } from "styled-components";
import { FLEX } from "src/styles";

const Results = styled.ul`
    background-color: ${({ theme }) => theme.bgColor.primary};
    width: 100%;
    padding-top: 0.125rem;
    border: none;
    border-top-width: 0;
    margin-top: 0;
    max-height: 8rem;
    overflow-y: auto;
    position: absolute;
    box-shadow: 1px 0px 8px ${({ theme }) => theme.bgColor.secondary};
`;

const UserResult = styled.li`
    padding: 0.5rem;
    ${FLEX("flex", "flex-start")};
    gap: 1rem;
    &:hover{
        cursor: pointer;
        background-color: ${({ theme }) => theme.bgColor.secondary};
    }
`;

export { Results, UserResult };