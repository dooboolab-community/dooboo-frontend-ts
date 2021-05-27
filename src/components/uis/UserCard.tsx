import React, {ReactElement} from 'react';

import {device} from '../../theme';
import styled from '@emotion/styled';
import {useAppContext} from '../../providers/AppProvider';

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-self: center;
  @media ${device.mobileS} {
    max-width: 768px;
    height: 100vh;
    width: 100vw;
    justify-content: center;
    align-items: center;
  }

  @media ${device.tablet} {
    justify-content: flex-start;
    align-items: flex-start;
    margin-top: 400px;
  }
`;

const Text = styled.span`
  font-size: 18px;
  line-height: 1.5;
  font-family: sans-serif;
  color: ${(props) => props.theme.fontColor};
`;

function UserCard(): ReactElement {
  const {state} = useAppContext();

  return (
    <ContentWrapper>
      <Text>{state.user.displayName}</Text>
      <Text>{state.user.age ? state.user.age : ''}</Text>
      <Text>{state.user.job}</Text>
    </ContentWrapper>
  );
}

export default UserCard;
