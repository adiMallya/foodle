import { styled } from "styled-components";

export const LoaderWrapper = styled.div`
  background: rgba(255, 255, 255, 0.75);
  position: fixed;
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  z-index: ${({ theme }) => theme.z[7]};
`;