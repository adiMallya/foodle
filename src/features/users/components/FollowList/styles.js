import { styled } from "styled-components";
import { FLEX } from "src/styles";

const Wrapper = styled.div`
    ${FLEX("flex", "flex-start", null, "column")};
    gap: 1.5rem;
    height: max-content;
    padding: 0.85rem 1.1rem;
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

export { Wrapper, UserCard, UserDesc, UserFullName, UserName };