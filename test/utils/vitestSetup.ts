import createFetchMock from 'vitest-fetch-mock';
import {vi} from 'vitest';

const fetchMock = createFetchMock(vi);

// enables mocks on fetch throughout entire test suites.
fetchMock.enableMocks();
