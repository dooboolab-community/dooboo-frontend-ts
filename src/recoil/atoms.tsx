import type {User} from '../types';
import {atom} from 'recoil';

export const userRecoilState = atom<User | null>({
  key: 'userState',
  default: null,
});
