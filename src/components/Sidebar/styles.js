import { styled } from "styled-components";
import { NavLink } from "react-router-dom";
import { Icon } from "src/components/atoms";
import { FLEX, device } from "src/styles";

const SidebarContainer = styled.nav`
    ${FLEX("flex", "center")};
    background-color: ${({ theme }) => theme.bgColor.primary};

    width: 100%;
    overflow-x: hidden;
    overflow-y: hidden;

    position: fixed;
    bottom: 0;
    border-top: 1px solid ${({ theme }) => theme.border.solid};
    z-index: ${({ theme }) => theme.z[4]};

    @media ${device.md}{
        ${FLEX("flex", "center", "space-between", "column")};
        top: 0;
        width: fit-content;
        border: none;
    }
`;

const NavLinks = styled.ul`
    ${FLEX('flex', 'center', 'flex-start')};
    margin: 1.5rem auto;

    @media ${device.md}{
        ${FLEX("flex", "center", "flex-around", "column")};
        gap: 2rem;
        margin: 2rem auto;
    }
`;

const Navlink = styled(NavLink)`
    padding: 1.75rem;
    width: max-content;
    color: ${({ theme }) => theme.font.primary};
    cursor: pointer;
    &:hover{
        background-color: ${({ theme }) => theme.bgColor.secondary};
        border-radius: ${({ theme }) => theme.border.roundedXl};
        padding: 0.625rem;
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
    font-size: ${({ theme }) => theme.font.lg};
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
    fontWeight: "bold",
    padding: "0.625rem",
};

export { SidebarContainer, NavLinks, Navlink, NavPill, NavIcon, Brand, activeStyle };