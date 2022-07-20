import * as renderer from 'react-test-renderer';

import {RenderResult, fireEvent, render} from '@testing-library/react';

import React from 'react';
import Temp from '../Temp';
import {createTestElement} from '../../../../test/testUtils';

const props = {};
const component = createTestElement(<Temp {...props} />);

describe('[Temp] render', () => {
  it('renders without crashing', () => {
    const rendered = renderer.create(component).toJSON();

    expect(rendered).toMatchSnapshot();
    expect(rendered).toBeTruthy();
  });
});

describe('[Temp] Interaction', () => {
  let renderResult: RenderResult;

  beforeEach(() => {
    renderResult = render(component);
  });

  // eslint-disable-next-line jest/expect-expect
  it('should simulate [onClick] when [btn] has been clicked', () => {
    const btnInstance = renderResult.getByText('back to tab page');

    fireEvent.click(btnInstance);
  });
});
