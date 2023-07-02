import { styled } from "styled-components";
import { FLEX } from "src/styles";

const ModalWrapper = styled.div`
  position: fixed;
  inset: 0;
  z-index: ${({ theme }) => theme.z[7]};
  background-color: rgba(0, 0, 0, 0.5);

  ${FLEX("flex", "center", "center")};
`;

const ModalContent = styled.div`
    min-width: 30rem;
    max-height: fit-content;
    border-radius: ${({ theme }) => theme.border.roundedMd};
    user-select: none;
`;

export { ModalWrapper, ModalContent };