import styled from 'styled-components';

export const TransparentButton = styled('button')`
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
  background: rgba(235, 87, 87, 0.03);
  color: #333;
  opacity: 1;
  // transition: opacity 0.2s;

  &:hover {
    opacity: 0.5;
  }
  &:active {
    opacity: 0.5;
  }
`;

export const WhiteButton = styled('button')`
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
  opacity: 1;
  // transition: opacity 0.2s ease-in-out;

  &:hover {
    opacity: 0.5;
  }
  &:active {
    opacity: 0.5;
  }
`;
