import React from 'react';
import { mount, render, shallow } from 'enzyme';

import Store from '@stores/appStore';
import { SignUp } from '@screen/SignUp';

// test for the container page in dom
describe('SignUp page DOM rendering test', () => {
  let page;
  const testStore = new Store();
  beforeEach(() => {
    page = shallow(
        <SignUp test={true} store={testStore} />,
    );
  });

  it('testStore is sent as props and its user property has to be defined', () => {
    const pageStore = page.instance().props.store;
    expect(pageStore.user).toBeDefined();
  });
});
