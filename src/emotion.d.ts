import '@emotion/react';
import {DoobooTheme} from './theme';

declare module '@emotion/react' {
  export interface Theme extends DoobooTheme {}
}
