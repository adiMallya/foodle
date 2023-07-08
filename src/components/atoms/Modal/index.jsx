import { useRef } from "react";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { Button } from "src/components/atoms";
import { useClickOutside } from "src/hooks/useClickOutside";

import * as S from "./styles";

const Modal = (props) => {
  const { showModal, closeModal, title, children } = props;
  const modalRef = useRef();

  useClickOutside(modalRef, closeModal);

  if (!showModal) return null;
  return (
    <S.ModalWrapper>
      <S.ModalContent ref={modalRef}>
        <S.ModalHeader>
          {title ? <span>{title}</span> : null}
          <Button variant="icon" onClick={closeModal}>
            <S.CloseIcon icon={faXmark} title="Close" />
          </Button>
        </S.ModalHeader>
        {children}
      </S.ModalContent>
    </S.ModalWrapper>
  );
};

export { Modal };
