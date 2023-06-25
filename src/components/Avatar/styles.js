import { styled } from "styled-components";
import { FLEX } from "src/styles";

const AvatarWrapper = styled.span`
    height: 2rem;
    width: 3rem;
    border-radius: 50%;
    overflow: hidden;

    background-color: ${({ theme }) => theme.color.primary};
    cursor: pointer;
`;

const AvatarImage = styled.img`
    height: 100%;
    width: 100%;
    object-fit: cover;
`;

const AvatarText = styled.span`
    height: 100%;
    width: 100%;
    font-size: 0.8rem;
    ${FLEX("flex", "center", "center")}
    color: ${({ theme }) => theme.font.primary};
`;

export { AvatarWrapper, AvatarImage, AvatarText };