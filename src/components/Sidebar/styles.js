import { styled } from "styled-components";
import { NavLink } from "react-router-dom";
import { Icon, BaseLink } from "src/components/atoms";
import { FLEX, device } from "src/styles";
import * as SS from "../Suggestions/styles";

const SidebarContainer = styled.nav`
    ${FLEX("flex", "center")};
    background-color: ${({ theme }) => theme.bgColor.primary};

    width: 100%;
    overflow-x: hidden;
    overflow-y: hidden;

    position: fixed;
    bottom: 0;
    border-top: 1px solid ${({ theme }) => theme.border.solid};
    z-index: ${({ theme }) => theme.z[7]};

    @media ${device.md}{
        ${FLEX("flex", "flex-start", "space-between", "column")};
        width: fit-content;
        height: 100vh;
        border: none;
    }
`;

const NavLinks = styled.ul`
    ${FLEX('flex')};
    margin: 1.5rem auto;

    @media ${device.md}{
        ${FLEX("flex", "center", null, "column")};
        gap: 2rem;
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
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    display: none;
    @media ${device.lg}{
        display: inline;
    }
`;

const ProfileLink = styled(BaseLink)`
    ${FLEX("flex", "flex-start")};
    gap: 1rem;
    width: 100%;
    cursor: pointer;
`;

const ProfileDesc = styled(SS.UserDesc)`
    display: none;
    @media ${device.lg}{
        display: block;
    }
`;

const CreatePost = styled.li`
    @media ${device.lg}{
        display: none;
    }
`;

const activeStyle = {
    backgroundColor: '#111827',
    borderRadius: "9999px",
    fontWeight: "bold",
    padding: "0.625rem",
};

export { SidebarContainer, NavLinks, Navlink, NavPill, NavIcon, Brand, ProfileLink, ProfileDesc, CreatePost, activeStyle };