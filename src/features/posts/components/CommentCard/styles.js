import { styled } from "styled-components";
import { FLEX } from "src/styles";

const CommentWrapper = styled.div`
    ${FLEX("flex", "flex-start")};
    gap: 1rem;
    width: 100%;
    padding: 0.625rem;
    background-color: ${({ theme }) => theme.bgColor.secondary};
`;

const CommentContent = styled.form`
    ${FLEX("flex", "flex-start", null, "column")};
    gap: 1rem;
    width: 100%;
`;

const CommentHeader = styled.div`
    ${FLEX("flex", "center", "space-between")};
    width: 100%;
    position: relative;
    border-top: 1px solid ${({ theme }) => theme.border.solid};
    padding-top: 0.5rem;
`;

const CommentDetails = styled.div`
    ${FLEX("flex", "center", null)};
    gap: 1rem;
    color: ${({ theme }) => theme.font.secondary};
    word-break: normal;
`;

export { CommentWrapper, CommentContent, CommentHeader, CommentDetails };
