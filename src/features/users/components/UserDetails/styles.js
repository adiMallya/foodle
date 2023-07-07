import { styled } from "styled-components";
import { FLEX, device } from "src/styles";
import { Icon } from "src/components/atoms";

const ProfileWrapper = styled.div`
    ${FLEX("flex", "center", "center", "column")};
    gap: 1rem;
    padding: 1rem;
    border: 1px solid ${({ theme }) => theme.border.solid};
    background-color: ${({ theme }) => theme.bgColor.primary};
    
    @media ${device.md}{
        ${FLEX("flex", "flex-start", "space-evenly", "row")};
    };
`;

const ProfileSection = styled.div`
    ${FLEX("flex", null, null)};
    gap: 1rem;
`;

const UserDetail = styled.div`
    ${FLEX("flex", "center", null, "column")};
    gap: 1rem;
`;
// User name
const UserDesc = styled.div`
    ${FLEX("flex", "flex-start", null, "column")};
    width: 100%;
`;

const UserFullName = styled.p`
    font-size: ${({ theme }) => theme.font.md};
`;

const UserName = styled.span`
    font-size: ${({ theme }) => theme.font.sm};
    color: ${({ theme }) => theme.font.secondary};
`;
// User bio, website
const UserBio = styled.div`
    ${FLEX("flex", "flex-start", null, "column")};
    width: 100%;
`;

const UserWebsite = styled.a`
    ${FLEX("flex", "center")};
    gap: 0.5rem;
    color: ${({ theme }) => theme.color.primary};
    &:hover{
        text-decoration: underline;
    }
    cursor: pointer;
`;
// Following
const UserPresence = styled.div`
    ${FLEX("flex", "flex-start")};
    width: 100%;
    gap: 1rem;
    div {
        color: ${({ theme }) => theme.font.secondary};
        cursor: pointer;
        &:hover{
            text-decoration: underline;
        }
    }
    span:first-child{
        font-weight: ${({ theme }) => theme.font.bold};
    }
`;
// User actions
const UserAction = styled.div`
    ${FLEX("flex", "flex-start")};
`;

const LogOutIcon = styled(Icon)`
    color: ${({ theme }) => theme.color.secondary};
    font-size: ${({ theme }) => theme.font.md};
`;

export { ProfileWrapper, ProfileSection, UserDetail, UserDesc, UserFullName, UserName, UserBio, UserWebsite, UserPresence, UserAction, LogOutIcon };