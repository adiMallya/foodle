import { styled } from "styled-components";
import { FLEX, CLAMP_TEXT } from "src/styles";
import { Icon } from "src/components/atoms";

const PostContainer = styled.div`
    ${FLEX("flex", "flex-start", "space-between")};
    gap: 1rem;

    background-color: ${({ theme }) => theme.bgColor.secondary};
    padding: 1.1rem 0.625rem;
`;

const PostSection = styled.div`
    ${FLEX("flex", "flex-start", null, "column")};
    gap: 1rem;
    width: 100%;
`;

const PostHeader = styled.div`
    ${FLEX("flex", "center", "space-between")};
    width: 100%;
`;

const PostUser = styled.div`
    ${FLEX("flex", "center")};
    margin-top: 0.25rem;
    cursor: pointer;
`;

const PostDetails = styled.div`
    ${FLEX("flex", "center", null)};
    gap: 1rem;
    color: ${({ theme }) => theme.font.secondary};
    word-break: normal;
`;

const PostContent = styled.p`
    ${CLAMP_TEXT()};
    cursor: pointer;
`;

const PostMedia = styled.div`
    display: flex;
    width: 250px;
    height: 300px;

    margin: 0.125rem 0;
    cursor: pointer;
`;

const UserActions = styled.div`
    ${FLEX("flex", null, "space-between")};

    width: 100%;
    border-top: 1px solid ${({ theme }) => theme.border.solid};
    padding-top: 0.625rem;

    div:first-of-type {
        ${FLEX("flex")};
        gap: 2rem;
    }

    span {
        margin: 0;
        color: ${({ theme }) => theme.font.primary};
    }
`;
// Icons
const LikeIcon = styled(Icon)`
    color: ${({ theme }) => theme.color.primary};
`;

const BookmarkIcon = styled(Icon)`
    color: ${({ theme }) => theme.color.success};
`;

export { PostContainer, PostSection, PostHeader, PostUser, PostDetails, PostContent, PostMedia, UserActions, LikeIcon, BookmarkIcon };