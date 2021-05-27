import React, {ReactElement} from 'react';

import Button from '../uis/Button';
import styled from '@emotion/styled';
import {useHistory} from 'react-router-dom';

const Container = styled.div`
  flex: 1;
  align-self: stretch;
  justify-content: center;
  align-items: center;
  background: ${(props) => props.theme.background};
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
