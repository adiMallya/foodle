import { styled } from "styled-components";
import { FLEX, CLAMP_TEXT } from "src/styles";
import { Icon } from "src/components/atoms";

const PostContainer = styled.div`
    ${FLEX("flex", "flex-start")};
    gap: 1rem;

    background-color: ${({ theme }) => theme.bgColor.secondary};
    padding: 1.1rem 0.625rem;
    margin-bottom: 0.625rem;
    border-radius: ${({ theme }) => theme.border.roundedMd};
`;

const PostSection = styled.div`
    ${FLEX("flex", "flex-start", null, "column")};
    gap: 1rem;
    width: 100%;
`;

const PostHeader = styled.div`
    ${FLEX("flex", "center", "space-between")};
    width: 100%;
    position: relative;
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
    ${FLEX("flex")};
    width: 300px;
    height: 300px;

    cursor: pointer;

    img {
        height: 100%;
        width: 100%;
        object-fit: cover;
    }
`;

const UserActions = styled.div`
    ${FLEX("flex", null, "space-between")};

    width: 100%;
    border-top: 1px solid ${({ theme }) => theme.border.solid};
    padding-top: 0.625rem;

    div:first-child {
        ${FLEX("flex")};
        gap: 1rem;
    }

    div:first-child > *{
        display: inline-block;
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

const ShareIcon = styled(Icon)`
    color: #a3e635;
`;

const MoreOptions = styled.div`
    padding: 0.5rem 1rem;
    font-size: 1em;
    cursor: pointer;
`;

export { PostContainer, PostSection, PostHeader, PostUser, PostDetails, PostContent, PostMedia, UserActions, LikeIcon, BookmarkIcon, ShareIcon, MoreOptions };