import React, { ReactElement } from 'react';

import Button from '../shared/Button';
import { IC_GOOGLE_W } from '../../utils/Icons';
import { User } from '../../types';
import { device } from '../../theme';
import { getString } from '../../../STRINGS';
import styled from 'styled-components';
import { useAppContext } from '../../providers/AppProvider';
import { useHistory } from 'react-router-dom';
import { useThemeContext } from '../../providers/ThemeProvider';

const Container = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
  align-self: stretch;
  overflow: scroll;
  background: ${(props): string => props.theme.background};

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
  color: ${(props): string => props.theme.fontColor};
`;

function Intro(): ReactElement {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let timer: any;
  const history = useHistory();
  const { state, setUser, resetUser } = useAppContext();
  const { changeThemeType } = useThemeContext();
  const [isLoggingIn, setIsLoggingIn] = React.useState(false);

  const onLogin = (): void => {
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

  const navigate = (): void => {
    const location: Record<string, any> = {
      pathname: '/404',
      state: {},
    };
    history.push(location);
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
          onClick={(): void => onLogin()}
          text={getString('LOGIN')}
        />
        <Button onClick={(): void => navigate()} text={getString('NAVIGATE')} />
        <Button
          onClick={(): void => changeThemeType()}
          text={getString('CHANGE_THEME')}
        />
      </ButtonWrapper>
    </Container>
  );
}

export default Intro;
