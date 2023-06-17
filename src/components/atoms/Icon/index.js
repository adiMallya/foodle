import { styled } from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Icon = styled(FontAwesomeIcon)`
    color: ${(p) => p.color ? p.color : p.theme.font.primary};
    font-size: ${({ theme }) => theme.font.sm};
`;