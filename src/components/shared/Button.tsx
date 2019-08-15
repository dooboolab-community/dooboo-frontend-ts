import { ButtonPrimary, ButtonPrimaryLight } from '../ui/Buttons';

import React from 'react';
import styled from 'styled-components';

interface Props {
  id?: string;
  inverted?: boolean;
  imgSrc?: any;
  text?: string;
  onClick?: () => void;
  isLoading?: boolean;
}

const PrimaryTextLight = styled.span`
  font-size: 14px;
  color: ${(props) => props.theme.btnPrimaryLightFont};
`;

const PrimaryText = styled.span`
  font-size: 14px;
  color: ${(props) => props.theme.btnPrimaryFont};
`;

const LogoImg = styled.img`
  position: absolute;
  left: 16px;
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

function Button(props: Props) {
  const { inverted, onClick, imgSrc, text } = props;
  if (inverted) {
    return (
      <ButtonPrimaryLight style={{ height: '60px' }} onClick={onClick}>
        {props.isLoading ? (
          <Spinner id='spinner' />
        ) : (
          <div>
            {props.imgSrc ? <LogoImg src={props.imgSrc} /> : null}
            <PrimaryTextLight>{props.text}</PrimaryTextLight>
          </div>
        )}
      </ButtonPrimaryLight>
    );
  }
  return (
    <ButtonPrimary style={{ height: '60px' }} onClick={onClick}>
      {props.isLoading ? (
        <Spinner id='spinner' />
      ) : (
        <div>
          {props.imgSrc ? <LogoImg src={props.imgSrc} /> : null}
          <PrimaryText>{props.text}</PrimaryText>
        </div>
      )}
    </ButtonPrimary>
  );
}

export default Button;
