import { styled } from "styled-components";
import { FLEX } from "src/styles";

const Wrapper = styled.div`
    ${FLEX("flex", "flex-start", null, "column")};
    gap: 1.5rem;
    height: max-content;
    margin-top: 4rem;
    padding: 0.85rem 1.1rem;
    border-radius: ${({ theme }) => theme.border.roundedMd};
    position: fixed;
    background-color: ${({ theme }) => theme.bgColor.secondary};
`;

const ListTitle = styled.p`
    font-size: ${({ theme }) => theme.font.sm};
    font-weight: ${({ theme }) => theme.font.bold};
`;

const UserCard = styled.div`
    ${FLEX("flex", "center", "center")};
    gap: 1rem;
    width: 100%;
    cursor: pointer;
`;

const UserDesc = styled.div`
    ${FLEX("flex", "flex-start", null, "column")};
    width: 100%;
`;

const UserFullName = styled.p`
    font-size: ${({ theme }) => theme.font.xs};
`;

const UserName = styled.span`
    font-size: ${({ theme }) => theme.font.xs};
    color: ${({ theme }) => theme.font.secondary};
`;

export { Wrapper, ListTitle, UserCard, UserDesc, UserFullName, UserName };