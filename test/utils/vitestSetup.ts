import type * as ReactRouterDom from 'react-router-dom';

import {afterAll, vi} from 'vitest';

import {cleanup} from '@testing-library/react';
import createFetchMock from 'vitest-fetch-mock';

afterAll(cleanup);

const fetchMock = createFetchMock(vi);

// enables mocks on fetch throughout entire test suites.
fetchMock.enableMocks();

// mock react router dom during test
vi.mock('react-router-dom', async () => {
  const lib = (await vi.importActual(
    'react-router-dom',
  )) as typeof ReactRouterDom;

  return {
    ...lib,
    useNavigate: () => vi.fn(),
  };
});
