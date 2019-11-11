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
  background: ${(props): string => props.theme.btnPrimary};
  opacity: 1;
  // transition: opacity 0.2s;

  &:hover {
    opacity: 0.5;
  }
  &:active {
    opacity: 0.5;
  }
`;
