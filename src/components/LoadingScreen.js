import React from 'react';
import styled, { keyframes } from 'styled-components';

const bounce = keyframes`
  0%, 20%, 50%, 80%, 100% { transform: translateY(0); }
  40% { transform: translateY(-30px); }
  60% { transform: translateY(-15px); }
`;

const LoaderWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start; /* Aligns items to the top */
  padding: 2%; /* Adds some padding to push text slightly down from the top */
  height: 100vh;
  background-color: #fff; /* White background */
`;

const LoadingText = styled.div`
  font-size: 30px;
  color: #000; /* Black text */
  animation: ${bounce} 2s infinite;
  font-family: 'Arial', sans-serif;
  letter-spacing: 2px;
`;

const LoadingScreen = () => {
  return (
    <LoaderWrapper>
      <LoadingText>Loading...</LoadingText>
    </LoaderWrapper>
  );
};

export default LoadingScreen;
