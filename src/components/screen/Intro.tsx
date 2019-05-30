import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import styled from 'styled-components';

import Button from '../shared/Button';

import { device, ThemeType } from '../../theme';
import { AppProvider as Provider, AppConsumer, AppContext } from '../../providers';

import { IC_FACEBOOK_W, IC_GOOGLE_W } from '../../utils/Icons';

import { IUser } from '../../types';

import { getString } from '../../../STRINGS';

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

interface IProps {
  history: any;
  store?: any;
}

function Intro(props: IProps) {
  let timer: any;
  const { state, dispatch } = React.useContext(AppContext);
  const [isLoggingIn, setIsLoggingIn] = React.useState(false);

  const onLogin = () => {
    dispatch({ type: 'reset-user' });
    setIsLoggingIn(true);
    timer = setTimeout(() => {
      const user: IUser = {
        displayName: 'dooboolab',
        age: 30,
        job: 'developer',
      };
      dispatch({ type: 'set-user', payload: user });
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

  const changeTheme = () => {
    let payload: object;
    if (state.theme === ThemeType.LIGHT) {
      payload = {
        theme: ThemeType.DARK,
      };
    } else {
      payload = {
        theme: ThemeType.LIGHT,
      };
    }
    dispatch({
      type: 'change-theme-mode',
      payload,
    });
  }

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
          data-testid='btn2'
          onClick={() => navigate()}
          isReverse={true}
          text={getString('NAVIGATE')}
        />
        <Button
          data-testid='btn3'
          onClick={() => changeTheme()}
          isReverse={true}
          text={getString('CHANGE_THEME')}
        />
      </ButtonWrapper>
    </Container>
  );
}

export default Intro;
