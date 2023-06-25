import { styled } from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Icon = styled(FontAwesomeIcon)`
    color: ${({ theme }) => theme.font.primary};
    font-size: ${({ theme }) => theme.font.sm};
`;