// @flow
import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import styled from 'styled-components';

import Button from '../shared/Button';

import { inject, observer } from 'mobx-react';
import { device } from '../../theme';
import Store from '../../stores/appStore';

import { IC_GOOGLE_W } from '../../utils/Icons';
import User from '../../models/User';

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
  color: #e3e3e3;
`;

interface IProps {
  store: Store;
  history: any;
}

interface IState {
  isLoggingIn: boolean;
}

@inject('store') @observer
class Intro extends Component<IProps, IState> {
  private timer: any;

  constructor(props: IProps) {
    super(props);
    this.state = {
      isLoggingIn: false,
    };
  }

  public render() {
    const { getString } = this.props.store.locale;
    return (
      <Container>
        <ContentWrapper>
          <Text>{this.props.store.user.displayName}</Text>
          <Text>{this.props.store.user.age}</Text>
          <Text>{this.props.store.user.job}</Text>
        </ContentWrapper>
        <ButtonWrapper>
          <Button
            id='btn'
            imgSrc={IC_GOOGLE_W}
            isLoading={this.state.isLoggingIn}
            onPress={() => this.onLogin()}
            // white={true}
            txt={getString('LOGIN')}
          />
          <Button
            id='btn'
            onPress={() => this.navigate()}
            white={true}
            txt={getString('NAVIGATE')}
          />
        </ButtonWrapper>
      </Container>
    );
  }

  private onLogin = () => {
    this.props.store.user = new User();
    this.setState({ isLoggingIn: true }, () => {
      this.timer = setTimeout(() => {
        this.props.store.user.displayName = 'dooboolab';
        this.props.store.user.age = 30;
        this.props.store.user.job = 'developer';
        this.setState({ isLoggingIn: false });
      }, 1000);
    });
  }

  private navigate = () => {
    const location: any = {
      pathname: '/404',
      state: {},
    };
    // this.props.history.replace(location);
    this.props.history.push(location);
  }
}

export default Intro;
