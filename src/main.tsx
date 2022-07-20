import App from './App';
import React from 'react';
import ReactDOM from 'react-dom/client';
import {initFbt} from './utils/fbt';

initFbt();

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
