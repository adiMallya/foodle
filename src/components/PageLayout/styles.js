import { styled } from "styled-components";
import { device } from "src/styles";

const Wrapper = styled.div`
    margin: auto;
    width: 100%;
    height: 100vh;
    display: grid;
    grid-template-areas: 
        "main"
        "asideLeft"
        ;

    @media ${device.md}{
        grid-template-columns: 1fr 3fr;
        grid-template-areas: 
        "asideLeft main"
        "asideLeft main"
        ;
    }
    @media ${device.lg}{
        width: 80%;
        grid-template-columns: 1fr 2fr 1fr;
        grid-template-areas: 
        "asideLeft main asideRight"
        "asideLeft main asideRight"
        ;
    }    
`;

const AsideLeft = styled.aside`
    grid-area: asideLeft;
`;

const AsideRight = styled.aside`
    grid-area: asideRight;
`;

const Main = styled.main`
    height: 100vh;
    border-left: 1px ${({ theme }) => theme.border.solid};
    border-right: 1px ${({ theme }) => theme.border.solid};
    grid-area: main;
`;

export { Wrapper, AsideLeft, AsideRight, Main };