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
    font-size: 0.8rem;
`;

const AvatarText = styled.span`
    height: 2rem;
    width: 2rem;
    border-radius: 50%;
    font-size: 0.8rem;
    ${FLEX("center", "center")}
    color: ${({ theme }) => theme.font.primary};
    background-color: ${({ theme }) => theme.color.primary};
`;

export { AvatarWrapper, AvatarImage, AvatarText };