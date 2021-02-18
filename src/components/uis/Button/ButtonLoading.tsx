import type {FC} from 'react';
import React from 'react';
import styled from 'styled-components';

const Spinner = styled.div`
  border: 4px solid #f3f3f3; /* Light grey */
  border-top: 4px solid #3498db; /* Blue */
  border-radius: 50%;
  width: 24px;
  height: 24px;
  animation: spin 1s linear infinite;
  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

const ButtonLoading: FC = () => {
  return <Spinner id="spinner" />;
};

export default ButtonLoading;
