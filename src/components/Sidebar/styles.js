import { styled } from "styled-components";
import { NavLink } from "react-router-dom";
import { Icon } from "src/components/atoms";
import { FLEX, device } from "src/styles";

const SidebarContainer = styled.nav`
    ${FLEX("flex", "center", "space-between")};
    background-color: ${({ theme }) => theme.bgColor.primary};

    height: 100vh;
    width: 100%;
    overflow-x: hidden;
    overflow-y: auto;

    position: fixed;
    left: 0;
    bottom: 0;
    z-index: ${({ theme }) => theme.z[4]};

    @media ${device.md}{
        ${FLEX("flex", "center", "space-between", "column")};
    }
`;

const NavLinks = styled.ul`
    ${FLEX('flex', 'center', 'flex-start')};
    margin: 2rem auto;
    gap: 2rem;

    @media ${device.md}{
        ${FLEX("flex", "center", "flex-around", "column")};
    }
`;

const Navlink = styled(NavLink)`
    padding: 0.75rem;
    width: max-content;
    color: ${({ theme }) => theme.font.primary};
    cursor: pointer;
    &:hover{
        background-color: ${({ theme }) => theme.bgColor.secondary};
        border-radius: 9999px;
    }
`;

const NavIcon = styled(Icon)`
    font-size: ${({ theme }) => theme.font.md};
    @media ${device.lg}{
        display: none;
    }
`;

const NavPill = styled.span`
    display: none;
    @media ${device.lg}{
        display: inline;
    }
`;

const Brand = styled.li`
    color: ${({ theme }) => theme.color.primary};
    font-weight: ${({ theme }) => theme.font.bold};
    font-style: italic;
    display: none;
    @media ${device.lg}{
        display: inline;
    }
`;

const activeStyle = {
    backgroundColor: '#111827',
    borderRadius: "9999px",
    fontWeight: "bold"
};

export { SidebarContainer, NavLinks, Navlink, NavPill, NavIcon, Brand, activeStyle };