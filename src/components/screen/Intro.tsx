import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import styled from 'styled-components';

import Button from '../shared/Button';

import { inject, observer } from 'mobx-react';
import { media } from '../../theme';
import Store from 'src/stores/appStore';

const Container = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
  align-self: stretch;
  overflow: scroll;
  background: linear-gradient(to bottom right, rgb(12, 157, 197), rgb(201, 109, 216));

  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  overflow: hidden;
`;

const Box = styled.div`
  position: absolute;
  width: 85vw;
  bottom: 40px;

  ${media.mobile`
    width: 50vw;
  `}
`;

interface IProps {
  store?: Store;
}

@inject('store') @observer
class Intro extends Component<IProps, {}> {
  public render() {
    const { getString } = this.props.store.locale;
    return(
      <Container>
        <Box>
          <Button
            id='btn'
            onClick={() => this.onClick()}
            white={true}
            txt={getString('BUTTON')}
          />
        </Box>
      </Container>
    );
  }

  private onClick = () => {
    alert('clicked');
  }
}

export default Intro;
