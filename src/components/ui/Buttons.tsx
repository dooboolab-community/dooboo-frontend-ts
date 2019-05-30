import styled from 'styled-components';

export const ButtonPrimary = styled('button')`
  display: flex;
  width: 100%;
  height: 100%;

  border-radius: 3px;
  border-style: solid;
  border-width: 1px;
  border-color: #e3e3e3;
  margin-bottom: 8px;

  justify-content: center;
  align-items: center;
  cursor: pointer;
  background: ${(props) => props.theme.btnPrimary};
  opacity: 1;
  // transition: opacity 0.2s;

  &:hover {
    opacity: 0.5;
  }
  &:active {
    opacity: 0.5;
  }
`;

export const ButtonPrimaryLight = styled('button')`
  display: flex;
  width: 100%;
  height: 100%;
  border-radius: 3px;
  border-style: solid;
  border-width: 1px;
  margin-bottom: 8px;

  justify-content: center;
  align-items: center;
  cursor: pointer;
  background: ${(props) => props.theme.btnPrimaryLight};
  opacity: 1;
  // transition: opacity 0.2s ease-in-out;

  &:hover {
    opacity: 0.5;
  }
  &:active {
    opacity: 0.5;
  }
`;
