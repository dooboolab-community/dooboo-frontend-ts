import React from 'react';
import { shallow } from 'enzyme';

import { StyledInput } from '@shared/StyledInput';

describe('StyledInput component test', () => {
  const component = shallow(
    <StyledInput
      type='email'
      test={true}
      keyString='emailInput'
      placeholder='email'
      labelTxt='email'
    />,
  );

  it('component matches with its snapshot', () => {
    expect(component).toMatchSnapshot();
  });

  it('the component input event is triggered with a mock argument and the state will be changed', () => {
    const input = component.find('input');
    input.simulate('change', { target: {id: 'emailInput', value: 'mock-email' }});
    expect(component.state().inputDone).toEqual(true);
  });
});
