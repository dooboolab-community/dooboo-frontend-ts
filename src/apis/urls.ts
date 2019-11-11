import { AbortController } from 'abort-controller';

export interface RequestInitCustom extends RequestInit {
  signal: AbortController['signal'];
}

export const ROOT_URL_V1 = 'https://url.com/v1';
