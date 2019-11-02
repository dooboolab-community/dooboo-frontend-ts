import { IC_FACEBOOK_W, IC_GOOGLE_W } from '../../utils/Icons';
import React, { Component } from 'react';

import Button from '../shared/Button';
import { Redirect } from 'react-router-dom';
import { User } from '../../types';
import { device } from '../../theme';
import { getString } from '../../../STRINGS';
import styled from 'styled-components';
import { useAppContext } from '../../providers/AppProvider';
import { useThemeContext } from '../../providers/ThemeProvider';

const Container = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
  align-self: stretch;
  overflow: scroll;
  background: ${(props) => props.theme.background};

  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  overflow: hidden;
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
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

const ButtonWrapper = styled.div`
  position: absolute;
  flex-direction: column;

  @media ${device.mobileS} {
    bottom: 40px;
    width: 85vw;
    align-self: center;
  }

  @media ${device.tablet} {
    width: 50vw;
    right: 60px;
    align-self: center;
    top: 400px;
  }
`;

const Text = styled.span`
  font-size: 18px;
  line-height: 1.5;
  font-family: sans-serif;
  color: ${(props) => props.theme.fontColor};
`;

interface Props {
  history: any;
  store?: any;
}

function Intro(props: Props) {
  let timer: any;
  const { state, setUser, resetUser } = useAppContext();
  const { changeThemeType } = useThemeContext();
  const [isLoggingIn, setIsLoggingIn] = React.useState(false);

  const onLogin = () => {
    resetUser();
    setIsLoggingIn(true);
    timer = setTimeout(() => {
      const user: User = {
        displayName: 'dooboolab',
        age: 30,
        job: 'developer',
      };
      setUser(user);
      setIsLoggingIn(false);
      clearTimeout(timer);
    }, 1000);
  };

  const navigate = () => {
    const location: object = {
      pathname: '/404',
      state: {},
    };
    props.history.push(location);
  };

  return (
    <Container>
      <ContentWrapper>
        <Text>{state.user.displayName}</Text>
        <Text>{state.user.age ? state.user.age : ''}</Text>
        <Text>{state.user.job}</Text>
      </ContentWrapper>
      <ButtonWrapper>
        <Button
          imgSrc={IC_GOOGLE_W}
          isLoading={isLoggingIn}
          onClick={() => onLogin()}
          text={getString('LOGIN')}
        />
        <Button
          onClick={() => navigate()}
          inverted={true}
          text={getString('NAVIGATE')}
        />
        <Button
          onClick={() => changeThemeType()}
          inverted={true}
          text={getString('CHANGE_THEME')}
        />
      </ButtonWrapper>
    </Container>
  );
}

export default Intro;
