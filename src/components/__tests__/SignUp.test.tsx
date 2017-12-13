import React from 'react';
import { shallow } from 'enzyme';
import { StyleRoot } from 'radium';

import Store from '../../stores/appStore';
import { SignUp } from '../pages/SignUp';

// test for the container page in dom
describe('SignUp page DOM rendering test', () => {
  let page;
  const newStore = new Store();
  beforeEach(() => {
    // const testStore = new Store();
    page = shallow(
        <SignUp test={true} store={newStore} />,
    );
  });

  it('it mounts and get store props made of store class in appStore', () => {
    console.log(page.prop('store'));
    // expect(page.props().store).toEqual(newStore);
  });
});
