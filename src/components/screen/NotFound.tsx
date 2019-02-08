import React, { Component } from 'react';
import Button from '../shared/Button';
import styled from 'styled-components';

const Container = styled.div`
  display: 'flex',
  justify-content: 'center',
`;

interface IProps {
  history?: any;
}

class NotFound extends Component<IProps, {}> {
  public render() {
    return (
      <Container>
        <Button
          onClick={() => this.props.history.goBack()}
          txt='back to tab page'
        />
      </Container>
    );
  }
}

export default NotFound;
