import { styled } from "styled-components";
import { FLEX } from "src/styles";
import { Wrapper, Header } from "src/pages/styles";

const PostPage = styled(Wrapper)``;

const PostHeader = styled(Header)`
    ${FLEX("flex", "center", "flex-start")};
`;

export { PostPage, PostHeader };