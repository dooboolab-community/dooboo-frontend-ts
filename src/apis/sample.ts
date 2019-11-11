import { AbortController } from 'abort-controller';
import { ROOT_URL_V1 } from './urls';

export const sample = async (
  body: object,
  abortController: AbortController,
): Promise<object> => {
  const signal = abortController.signal;
  const fetchOption: RequestInit = {
    signal,
    method: 'POST',
    headers: new Headers({
      Accept: 'application/json',
      'Content-Type': 'application/json',
    }),
    body: JSON.stringify(body),
  };

  try {
    const res: Response = await fetch(`${ROOT_URL_V1}/sample`, fetchOption);
    const resString: string = await res.text();
    const resJson: object = JSON.parse(resString);
    return resJson;
  } catch (err) {
    throw new Error(err);
  }
};
