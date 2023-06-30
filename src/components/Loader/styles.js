import { styled } from "styled-components";

export const LoaderWrapper = styled.div`
  background: ${({ theme }) => theme.bgColor.secondary};
  position: fixed;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  z-index: ${({ theme }) => theme.z[7]};
`;