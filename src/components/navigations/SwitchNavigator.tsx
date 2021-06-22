import {BrowserRouter, Route, Routes} from 'react-router-dom';
import React, {ReactElement} from 'react';

import Intro from '../pages/Intro';
import Temp from '../pages/Temp';

function SwitchNavigator(): ReactElement {
  return (
    <BrowserRouter>
      <div
        style={{
          textAlign: 'center',
          flex: 1,
          width: '100vw',
        }}>
        <Routes>
          <Route path="/" element={<Intro />} />
          <Route path="*" element={<Temp />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default SwitchNavigator;
