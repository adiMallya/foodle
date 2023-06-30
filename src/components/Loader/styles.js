import { styled } from "styled-components";

export const LoaderWrapper = styled.div`
  background: ${({ theme }) => theme.bgColor.secondary};
  position: fixed;
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  z-index: ${({ theme }) => theme.z[7]};
`;