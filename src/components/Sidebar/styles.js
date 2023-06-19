import { styled } from "styled-components";
import { BaseLink, Icon } from "src/components/atoms";
import { FLEX, device } from "src/styles";

const SidebarContainer = styled.aside`
    ${FLEX('flex', "center", "space-between", "column")};
    position: fixed;
    background-color: ${({ theme }) => theme.bgColor.primary};

    height: 100vh;
    width: 100%;
    overflow-x: hidden;
    overflow-y: auto;
    z-index: ${({ theme }) => theme.z[4]};

    @media ${device.lg}{
        border-right: 2px ${({ theme }) => theme.border.solid};
    }
`;

const NavLinks = styled.ul`
    ${FLEX('flex', 'center', 'flex-start')};
    flex-grow: 1;
    gap: 3;
`;

const NavLink = styled(BaseLink)`
    padding: 3rem;
    width: max-content;
    cursor: pointer;
    &:hover{
        background-color: ${({ theme }) => theme.bgColor.secondary};
        border-radius: '9999px';
    }
`;

const NavIcon = styled(Icon)`
    @media ${device.lg}{
        display: none;
    }
`;

const NavPill = styled.span`
    display: hidden;
    @media ${device.lg}{
        display: inline;
    }
`;

export { SidebarContainer, NavLinks, NavLink, NavPill, NavIcon };