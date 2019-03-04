import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Intro from '../screen/Intro';
import Temp from '../screen/Temp';

interface IProps {
  store?: any;
}

function SwitchNavigator(props: {}) {
  return (
    <BrowserRouter>
      <div style={{ textAlign: 'center' }}>
        <Switch>
          <Route exact={true} path='/' render={(param) => <Intro {...param} {...props}/>} />
          <Route render={(param) => <Temp {...param} {...props}/>} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default SwitchNavigator;
