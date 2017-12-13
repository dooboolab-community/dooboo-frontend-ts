import React from 'react';
import { render } from 'enzyme';
import { StyleRoot } from 'radium';

import Store from '../../stores/appStore';
import { Tab1 } from '../pages/Tab1';

// test for the container page in dom
describe('Tab1 page DOM rendering test', () => {
  const testStore = new Store();
  // const page = render(
  //     <Tab1 test={true} store={testStore} />,
  // );

  it('it mounts and get store props made of store class in appStore', () => {
    // console.log(page);
    // expect(page.props().store).toEqual(testStore);
  });
});
