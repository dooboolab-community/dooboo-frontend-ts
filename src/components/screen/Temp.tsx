import React, { Component } from 'react';
import Button from '../shared/Button';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  height: 100vh;
  justify-content: center;
  align-items: center;
  background: ${(props) => props.theme.background};
  padding: 50px;
`;

interface Props {
  history?: any;
}

function Temp(props: Props) {
  const { history } = props;
  return (
    <Container>
      <Button
        onClick={() => history.goBack()}
        text='back to tab page'
      />
    </Container>
  );
}

export default Temp;
