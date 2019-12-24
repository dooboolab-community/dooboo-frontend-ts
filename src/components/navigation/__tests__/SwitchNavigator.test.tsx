import { RenderResult, render } from '@testing-library/react';

import React from 'react';
import SwitchNavigator from '../SwitchNavigator';
import { createTestElement } from '../../../../test/testUtils';

const props = {};
const component = createTestElement(<SwitchNavigator {...props} />);

describe('[SwitchNavigator] rendering', () => {
  let testingLib: RenderResult;

  beforeEach(() => {
    testingLib = render(component);
  });

  it('should renders without crashing', () => {
    const { baseElement } = testingLib;
    expect(baseElement).toMatchSnapshot();
    expect(baseElement).toBeTruthy();
  });
});
