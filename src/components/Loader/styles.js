import styled, { keyframes } from "styled-components";

const spin = keyframes`
0% {
  transform: rotate(0deg);
}
100% {
  transform: rotate(360deg);
}
`;

export const Load = styled.div`
  height: 40px;
  width: 40px;
  border-right: 4px solid #dd11ea;
  border-left: 4px solid #dd11ea;
  border-bottom: 4px solid #dd11ea;
  border-top: 4px solid #000;
  border-radius: 50%;
  animation: ${spin} 2s linear infinite;
`;
