import {afterAll, describe, it} from 'vitest';
import {cleanup, render} from '@testing-library/react';

import React from 'react';
import Temp from '../../../src/components/pages/Temp';
import {createTestElement} from '../../utils/testUtils';

const props = {};

afterAll(cleanup);

describe('[Temp] render', () => {
  it('renders without crashing', () => {
    const comp = render(<Temp {...props} />, {
      wrapper: ({children}) => createTestElement(children),
    });

    comp.unmount();
  });
});

describe('[Temp] Interaction', () => {
  it('should simulate [onClick] when [btn] has been clicked', async () => {
    const testingLib = render(<Temp {...props} />, {
      wrapper: ({children}) => createTestElement(children),
    });

    const buttonInstance = await testingLib.findByText('back to tab page');

    buttonInstance.click();

    testingLib.unmount();
  });
});
