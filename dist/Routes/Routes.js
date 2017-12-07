import React from 'react';
import { Route } from 'react-router-dom';
import Main from '@pages/Main';
import Test from '@pages/Test';
const Routes = () => {
    return (<div>
      <Route exact path='/' component={Main}/>
      <Route path='/test' component={Test}/>
      
      
    </div>);
};
export default Routes;
//# sourceMappingURL=Routes.js.map