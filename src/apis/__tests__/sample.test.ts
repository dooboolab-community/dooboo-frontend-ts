import {ROOT_URL, sample} from '../sample';
import {describe, expect, it, vi} from 'vitest';

describe('testing sample api', () => {
  it('calls google and returns data to me', () => {
    const mockedResult = JSON.stringify({data: '12345'});

    fetchMock.mockResponseOnce(mockedResult);

    return sample({user: 'hyo'}).then(async (res) => {
      const result = await res.text();

      expect(result).toEqual(mockedResult);

      expect(fetchMock.mock.calls.length).toEqual(1);
      expect(fetchMock.mock.calls[0][0]).toEqual(`${ROOT_URL}`);
    });
  });

  it('throws an error if object is undefined', () => {
    const onResponse = vi.fn();
    const onError = vi.fn();

    sample(undefined)
      .then(onResponse)
      .catch(onError)
      .then(() => {
        expect(onResponse).not.toHaveBeenCalled();
        expect(onError).toHaveBeenCalled();
      });
  });

  it('throws an error if error occurs', () => {
    fetchMock.mockRejectedValue(new Error('error'));

    const onResponse = vi.fn();
    const onError = vi.fn();

    sample({})
      .then(onResponse)
      .catch(onError)
      .then(() => {
        expect(onResponse).not.toHaveBeenCalled();
        expect(onError).toHaveBeenCalled();
      });
  });
});
