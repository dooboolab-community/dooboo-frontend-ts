import {expect, test} from 'vitest';

import React from 'react';
import UserCard from '../../../src/components/uis/UserCard';
import {createTestElement} from '../../utils/testUtils';
import {render} from '@testing-library/react';

const props = {};

test('[Temp] render', () => {
  const comp = render(<UserCard {...props} />, {
    wrapper: ({children}) => createTestElement(children),
  });

  expect(comp).toBeTruthy();

  comp.unmount();
});
