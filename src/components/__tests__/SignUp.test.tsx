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

  it('it mounts and get store props made of store class in appStore', () => {
    const element = page.find('[id="emailInput"]');
    console.log(element);
    element.simulate('change', { target: {id: 'emailInput', value: 'email' }});
    expect(page.state().idDone).toEqual(true);
  });
});
