import React, { Component } from 'react';
import styled from 'styled-components';
import { WhiteButton, TransparentButton } from '../ui/Buttons';

interface IProps {
  id?: string;
  white?: boolean;
  imgSrc?: any;
  text?: string;
  onClick?: () => void;
  isLoading?: boolean;
}

const Text = styled.span`
  font-size: 14px;
  color: rgb(128, 109, 216);
`;

const LogoImg = styled.img`
  position: absolute;
  left: 16px;
  height: 20px;
  width: 20px;
  object-fit: cover
`;

const Spinner = styled.div`
  border: 4px solid #f3f3f3; /* Light grey */
  border-top: 4px solid #3498db; /* Blue */
  border-radius: 50%;
  width: 24px;
  height: 24px;
  animation: spin 1s linear infinite;
  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`;

function Button(props: IProps) {
  const { white, onClick, imgSrc, text } = props;
  if (props.white) {
    return (
      <WhiteButton
        style={{ height: '60px' }}
        onClick={onClick}
      >
        {
          props.isLoading
            ? <Spinner id='spinner'/>
            : <div>
              {
                props.imgSrc
                  ? <LogoImg
                    src={props.imgSrc}
                  />
                  : null
              }
              <Text>{props.text}</Text>
            </div>
        }
      </WhiteButton>
    );
  }
  return (
    <TransparentButton
      style={{ height: '60px' }}
      onClick={onClick}
    >
      {
        props.isLoading
          ? <Spinner id='spinner'/>
          : <div>
            {
              props.imgSrc
                ? <LogoImg
                  src={props.imgSrc}
                />
                : null
            }
            <Text style={{ color: 'white' }}>{props.text}</Text>
          </div>
      }
    </TransparentButton>
  );
}

export default Button;
