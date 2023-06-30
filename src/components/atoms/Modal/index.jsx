import { useRef } from "react";
import * as S from "./styles";
import { useClickOutside } from "src/hooks/useClickOutside";

const Modal = (props) => {
  const { showModal, closeModal, children } = props;
  const modalRef = useRef();

  useClickOutside(modalRef, closeModal);

  if (!showModal) return null;
  return (
    <S.ModalWrapper>
      <S.ModalContent ref={modalRef}>{children}</S.ModalContent>
    </S.ModalWrapper>
  );
};

export { Modal };
