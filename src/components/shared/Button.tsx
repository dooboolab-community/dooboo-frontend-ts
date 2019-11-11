import React, { CSSProperties, ReactElement } from 'react';

import { ButtonPrimary } from '../ui/Buttons';
import styled from 'styled-components';

interface Props {
  id?: string;
  style?: CSSProperties;
  imgSrc?: string;
  text?: string;
  onClick?: () => void;
  isLoading?: boolean;
}

const ButtonWrapper = styled.div`
  flex: 1;
  height: 100%;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const PrimaryText = styled.span`
  font-size: 14px;
  color: ${({ theme }): string => theme.btnPrimaryFont};
  margin: auto;
`;

const LogoImg = styled.img`
  position: absolute;
  left: 20px;
  height: 20px;
  width: 20px;
  object-fit: cover;
`;

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

function Button(props: Props): ReactElement {
  const { onClick, imgSrc, text, style, isLoading } = props;
  return (
    <ButtonPrimary style={style} onClick={onClick}>
      {isLoading ? (
        <Spinner id="spinner" />
      ) : (
        <ButtonWrapper>
          {imgSrc ? <LogoImg src={imgSrc} /> : null}
          <PrimaryText>{text}</PrimaryText>
        </ButtonWrapper>
      )}
    </ButtonPrimary>
  );
}

Button.defaultProps = {
  style: { display: 'flex', height: '60px' },
};

export default Button;
