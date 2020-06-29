import * as renderer from 'react-test-renderer';

import { RenderResult, fireEvent, render } from '@testing-library/react';
import { createTestElement, history } from '../../../../test/testUtils';

import React from 'react';
import Temp from '../Temp';

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

  it('should simulate [onClick] when [btn] has been clicked', () => {
    jest.spyOn(history, 'back');

    const btnInstance = renderResult.getByText('back to tab page');
    fireEvent.click(btnInstance);
    expect(history.back).toHaveBeenCalledTimes(1);
  });
});
