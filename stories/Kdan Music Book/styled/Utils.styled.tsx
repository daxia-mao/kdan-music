import styled, { keyframes } from "styled-components";
const glow = keyframes`
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0.5;
  }
`;
const Error = styled.div`
  display: flex;
  min-width: 100%;
  min-height: 560px;
  justify-content: center;
  align-items: center;
  background-color: #f8f9fa;
  border-radius: 8px;
  &::before {
    content: "✗";
    font-size: 48px;
    color: #ff4d6d;
  }
`;
const Loading = styled.div`
  display: flex;
  min-width: 100%;
  min-height: 560px;
  justify-content: center;
  align-items: center;
  background-color: #dee2e6;
  border-radius: 8px;
  animation: ${glow} 1.5s ease-in-out infinite;
`;

export default { Error, Loading };
