import { styled } from "styled-components";
import { FLEX } from "src/styles";

const Wrapper = styled.div`
    ${FLEX("flex", null, null, "column")};

    width: 100%;
    height: 100%;

    border-left: 0.3px solid ${({ theme }) => theme.border.solid};
    border-right: 0.3px solid ${({ theme }) => theme.border.solid};
`;

const Header = styled.div`
    ${FLEX("flex", "center", "center")};
    padding: 1rem 0.625rem;
    border: 0.3px solid ${({ theme }) => theme.border.solid};
    
    position: sticky;
    top: 0;
    z-index: ${({ theme }) => theme.z[7]};
    width: 100%;

    background-color: ${({ theme }) => theme.bgColor.primary};
    -webkit-backdrop-filter: blur(8px);
    opacity: 0.9;

    font-weight: ${({ theme }) => theme.font.semibold};
    font-family: 'Lucida Sans', sans-serif;
    color: ${({ theme }) => theme.font.primary};
`;

const NoData = styled.div`
    ${FLEX("flex", "center", null, "column")};
    padding: 3rem;
    font-weight: ${({ theme }) => theme.font.semibold};
`;

const PostHeader = styled(Header)`
    ${FLEX("flex", "center", "flex-start")};
`;

export { Wrapper, Header, NoData, PostHeader };
