import React, {ReactElement} from 'react';

import Button from '../uis/Button';
import {IC_GOOGLE_W} from '../../utils/Icons';
import {User} from '../../types';
import UserCard from '../uis/UserCard';
import {device} from '../../theme';
import {fbt} from 'fbt';
import styled from '@emotion/styled';
import {useAppContext} from '../../providers/AppProvider';
import {useNavigate} from 'react-router-dom';
import {useThemeContext} from '../../providers/ThemeProvider';

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

function Intro(): ReactElement {
  // eslint-disable-next-line
  let timer: any;
  const navigate = useNavigate();
  const {setUser, resetUser} = useAppContext();
  const {changeThemeType} = useThemeContext();
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

  return (
    <Container>
      <UserCard />
      <ButtonWrapper>
        <Button
          testID="SIGN_IN"
          imgSrc={IC_GOOGLE_W}
          isLoading={isLoggingIn}
          onClick={(): void => onLogin()}
          text={fbt('Sign In', 'sign in')}
        />
        <Button
          onClick={(): void => navigate('/temp', {})}
          text={fbt('Navigate', 'navigate')}
        />
        <Button
          testID="CHANGE_THEME"
          onClick={(): void => changeThemeType()}
          text={fbt('Change theme', 'change theme')}
        />
      </ButtonWrapper>
    </Container>
  );
}

export default Intro;
