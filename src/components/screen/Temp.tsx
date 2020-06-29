import React, { ReactElement } from 'react';

import Button from '../shared/Button';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';

const Container = styled.div`
  display: flex;
  height: 100vh;
  justify-content: center;
  align-items: center;
  background: ${(props): string => props.theme.background};
  padding: 50px;
`;

function Temp(): ReactElement {
  const history = useHistory();
  return (
    <Container>
      <Button onClick={(): void => history.back()} text="back to tab page" />
    </Container>
  );
}

export default Temp;
