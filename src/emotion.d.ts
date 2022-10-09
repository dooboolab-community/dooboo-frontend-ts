import '@emotion/react';
import type {DoobooTheme} from './theme';

declare module '@emotion/react' {
  export interface Theme extends DoobooTheme {}
}
