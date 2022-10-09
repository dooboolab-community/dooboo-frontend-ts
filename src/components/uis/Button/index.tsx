import type {CSSProperties, ReactElement} from 'react';

import ButtonLoading from './ButtonLoading';
import {ButtonPrimary} from '../Styles';
import styled from '@emotion/styled';

interface Props {
  testID?: string;
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
  color: ${({theme}) => theme.btnPrimaryFont};
  margin: auto;
`;

const LogoImg = styled.img`
  position: absolute;
  left: 20px;
  height: 20px;
  width: 20px;
  object-fit: cover;
`;

function Button(props: Props): ReactElement {
  const {testID, onClick, imgSrc, text, style, isLoading} = props;

  return (
    <ButtonPrimary data-testid={testID} style={style} onClick={onClick}>
      {isLoading ? (
        <ButtonLoading />
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
  style: {display: 'flex', height: '60px'},
};

export default Button;
