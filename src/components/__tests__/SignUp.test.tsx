import React from 'react';
import { mount, render, shallow } from 'enzyme';
import { StyleRoot } from 'radium';

import Store from '../../stores/appStore';
import { SignUp } from '../pages/SignUp';

// test for the container page in dom
describe('SignUp page DOM rendering test', () => {
  let page;
  const testStore = new Store();
  beforeEach(() => {
    // const testStore = new Store();
    page = shallow(
        <SignUp test={true} store={testStore} />,
    );
  });

  it('the component input event is triggered with a mock argument and the state will be changed', () => {
    const element = page.find('[id="emailInput"]');
    element.simulate('change', { target: {id: 'emailInput', value: 'email' }});
    expect(page.state().idDone).toEqual(true);
  });

  it('testStore is sent as props and its user property has to be defined', () => {
    const pageStore = page.instance().props.store;
    expect(pageStore.user).toBeDefined();
  });
});
