import {ReactElement} from 'react';
import {device} from '../../theme';
import styled from '@emotion/styled';
import {useRecoilValue} from 'recoil';
import {userRecoilState} from '../../recoil/atoms';

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-self: center;
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

const Text = styled.span`
  font-size: 18px;
  line-height: 1.5;
  font-family: sans-serif;
  color: ${({theme}) => theme.text};
`;

function UserCard(): ReactElement {
  const user = useRecoilValue(userRecoilState);

  return (
    <ContentWrapper>
      <Text>{user?.displayName}</Text>
      <Text>{user?.age || ''}</Text>
      <Text>{user?.job}</Text>
    </ContentWrapper>
  );
}

export default UserCard;
