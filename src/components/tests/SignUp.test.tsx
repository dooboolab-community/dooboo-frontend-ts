import React from 'react';
import { mount } from 'enzyme';

import Store from '@stores/appStore';
import { SignUp } from '@pages/SignUp';

// test for the container page in dom
describe('SignUp page DOM rendering test', () => {
  it('it mounts and get store props made of store class in appStore', () => {
    const page = mount(
      <SignUp store={new Store()} />,
    );

    expect(page.props().store).toEqual(new Store());
  });
});
