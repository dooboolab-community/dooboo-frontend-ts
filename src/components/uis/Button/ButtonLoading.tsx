import type {ReactElement} from 'react';
import styled from '@emotion/styled';

const Spinner = styled.div`
  align-self: center;
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

const ButtonLoading = (): ReactElement => {
  return <Spinner id="spinner" />;
};

export default ButtonLoading;
