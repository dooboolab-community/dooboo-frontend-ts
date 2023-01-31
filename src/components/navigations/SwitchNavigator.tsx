import {BrowserRouter, Route, Routes} from 'react-router-dom';

import Intro from '../pages/Intro';
import type {ReactElement} from 'react';
import Temp from '../pages/Temp';
import {useEffect} from 'react';
import {useThemeContext} from '../../providers/ThemeProvider';

function SwitchNavigator(): ReactElement {
  const {changeThemeType} = useThemeContext();

  useEffect(() => {
    document.addEventListener('keydown', (event) => {
      if (event.ctrlKey && event.key === '.') {
        changeThemeType();
      }
    });

    return () => {
      document.removeEventListener('keydown', () => {});
    };
  }, [changeThemeType]);

  return (
    <BrowserRouter>
      <div
        style={{
          textAlign: 'center',
          flex: 1,
          width: '100vw',
        }}
      >
        <Routes>
          <Route path="/" element={<Intro />} />
          <Route path="*" element={<Temp />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default SwitchNavigator;
