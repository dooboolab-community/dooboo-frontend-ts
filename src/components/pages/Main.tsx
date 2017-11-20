import React from 'react';
import Navigation from '@navigations/RootStackNavigator';
import Footer from '@shared/Footer';

class Main extends React.Component {
  public render() {
    return (
      <div>
        <Navigation/>
        <div>
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default Main;
