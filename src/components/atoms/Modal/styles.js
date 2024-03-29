import { styled } from "styled-components";
import { FLEX } from "src/styles";
import { Icon } from "../Icon";

const ModalWrapper = styled.div`
  position: fixed;
  inset: 0;
  z-index: ${({ theme }) => theme.z[7]};
  background-color: rgba(0, 0, 0, 0.5);

  ${FLEX("flex", "center", "center")};
`;

const ModalHeader = styled.div`
  ${FLEX("flex", null, "space-between")};
  font-size: ${({ theme }) => theme.font.md};
  color: ${({ theme }) => theme.font.primary};
`;

const ModalContent = styled.div`
    min-width: 24rem;
    max-height: fit-content;
    padding: 0.625rem;
    border: 1px solid ${({ theme }) => theme.border.solid};
    border-radius: ${({ theme }) => theme.border.roundedMd};
    background-color: ${({ theme }) => theme.bgColor.secondary};
    user-select: none;
`;

const CloseIcon = styled(Icon)`
  color: ${({ theme }) => theme.font.primary};
  font-size: ${({ theme }) => theme.font.md};
`;

export { ModalWrapper, ModalContent, ModalHeader, CloseIcon };