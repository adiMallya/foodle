import { styled } from "styled-components";
import { FLEX } from "src/styles";

const Wrapper = styled.div`
    ${FLEX("flex", null, null, "column")};

    width: 100%;
    height: 100%;
`;

const Header = styled.div`
    ${({ align }) => align === 'left' ? FLEX("flex", "center", "flex-start") : FLEX("flex", "center", "center")};
    padding: 1rem 0.625rem;
    border: 1px solid ${({ theme }) => theme.border.solid};
    
    position: sticky;
    top: 0;
    z-index: ${({ theme }) => theme.z[7]};
    width: 100%;

    background-color: ${({ theme }) => theme.bgColor.secondary};
    -webkit-backdrop-filter: blur(8px);
    opacity: 0.9;

    font-weight: ${({ theme }) => theme.font.semibold};
    font-family: sans-serif;
    color: ${({ theme }) => theme.font.primary};
`;

const NoData = styled.div`
    ${FLEX("flex", "center", null, "column")};
    padding: 3rem;
    font-weight: ${({ theme }) => theme.font.semibold};
`;

export { Wrapper, Header, NoData };
