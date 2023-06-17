import { styled, css } from "styled-components";
import { FLEX, FADE_ANIMATION_IN } from "src/styles";

const BaseInputContainer = styled.div`
  position: relative;
  height: 40px;
  border-radius: 4px;
  background-color: ${({ theme }) => theme.bgColor.secondary};

  ${(p) => p.disabled && css`
    opacity: 0.5;
  `};
`;

const BaseInputLabel = styled.label`
  position: absolute;
  top: -30px;
  left: 0;
  padding: 0 0.25rem;
  font-size: ${({ theme }) => theme.font.sm};
  color: ${({ theme }) => theme.font.primary};
  text-transform: capitalize;
  pointer-events: none; 
  ${FADE_ANIMATION_IN};
`;

const BaseInput = styled.input`
  width: 100%;
  height: 100%;
  padding: 0.625rem 1.2rem;
  letter-spacing: 0.0125rem;
  border: 0;
  border-radius: 0.3rem;
  outline: 0;
  font-size: ${({ theme }) => theme.font.sm};
  color: ${({ theme }) => theme.font.secondary};
  background-color: transparent;

  &::placeholder {
    opacity: 0.75;

    &::first-letter {
      text-transform: uppercase;
    }
  }

  &:disabled {
    cursor: not-allowed;
  }
`;

const BaseInputPasswordVisibility = styled.div`
  position: absolute;
  bottom: 1rem;
  right: 1.5rem;
  width: 1.25rem;
  height: 1.25rem;
  ${FLEX('center', 'center')};
  cursor: pointer;
`;

export { BaseInputContainer, BaseInputLabel, BaseInput, BaseInputPasswordVisibility };