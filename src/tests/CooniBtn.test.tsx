import React from 'react';
import renderer from 'react-test-renderer';
import TestUtils from 'react-dom/test-utils';

import CooniBtn from '@shared/CooniBtn';

it('CooniBtn changes border color when it is clicked', () => {
  const CooniBtn: any = TestUtils.renderIntoDocument(
    <CooniBtn />
  )
});