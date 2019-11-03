import React, { ReactElement } from 'react';

import Button from '../shared/Button';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  height: 100vh;
  justify-content: center;
  align-items: center;
  background: ${(props): string => props.theme.background};
  padding: 50px;
`;

interface Props {
  history?: any;
}

function Temp(props: Props): ReactElement {
  const { history } = props;
  return (
    <Container>
      <Button onClick={(): void => history.goBack()} text="back to tab page" />
    </Container>
  );
}

export default Temp;
