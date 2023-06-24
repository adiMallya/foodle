import { styled } from "styled-components";
import { FLEX } from "src/styles";

const AvatarWrapper = styled.span`
    cursor: pointer;
`;

const AvatarImage = styled.img`
    height: 2rem;
    width: 2rem;
    border-radius: 50%;
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