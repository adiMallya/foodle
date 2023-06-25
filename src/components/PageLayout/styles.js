import { styled } from "styled-components";
import { device } from "src/styles";

const Wrapper = styled.div`
    margin: auto;
    width: 100vw;
    height: 100vh;
    
    display: grid;
    grid-template-areas: 
        "main"
        "asideLeft"
        ;

    @media ${device.md}{
        grid-template-columns: 5rem 1fr;
        grid-template-areas: 
        "asideLeft main"
        ;
    }
    @media ${device.lg}{
        width: 80%;
        grid-template-columns: 12rem 1fr 18rem;
        grid-template-areas: 
        "asideLeft main asideRight"
        ;
    }    
`;

const AsideLeft = styled.aside`
    grid-area: asideLeft;
`;

const AsideRight = styled.aside`
    grid-area: asideRight;
    display: none;
    @media ${device.lg}{
        display: block;
        margin: 1.5rem 0.625rem;
    }
`;

const Main = styled.main`
    grid-area: main;
`;

export { Wrapper, AsideLeft, AsideRight, Main };