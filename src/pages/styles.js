import { styled } from "styled-components";
import { FLEX } from "src/styles";

const Wrapper = styled.div`
    ${FLEX("flex", "center", null, "column")};

    width: 100%;
    height: 100vh;

    border-left: 0.3px solid ${({ theme }) => theme.border.solid};
    border-right: 0.3px solid ${({ theme }) => theme.border.solid};
`;

const Header = styled.div`
    ${FLEX("flex", "flex-start")};
    padding: 2rem;
    border: 0.3px solid ${({ theme }) => theme.border.solid};
    
    position: sticky;
    z-index: ${({ theme }) => theme.z[7]};
    width: 100%;

    background-color: ${({ theme }) => theme.bgColor.secondary};
    -webkit-backdrop-filter: blur(5px);
    backdrop-filter: blur(5px);    

    font-weight: ${({ theme }) => theme.font.semibold};
`;

const NoData = styled.div`
    ${FLEX("flex", "center")};
    padding: 3rem;
    font-weight: ${({ theme }) => theme.font.semibold};
`;

export { Wrapper, Header, NoData };
