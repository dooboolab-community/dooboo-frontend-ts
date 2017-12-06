import React, { Component } from 'react';
import Radium from 'radium';

const styles: any = {
  hyperLink: {
    textDecoration: 'none',
    color: 'rgb(13, 157, 197)',
    ':hover': {
      color: '#fff',
      backgroundColor: 'rgb(13, 157, 197)',
    },
  },
};

@Radium
class Tab1 extends Component<any> {
  public render() {
    return (
      <div>
        <div style={{fontSize: '20px'}}>
          boiler plate of <span style={{fontWeight: 'bold'}}>React</span> with
        </div><br/>
        <a key={0} style={styles.hyperLink} href='https://github.com/ReactTraining/react-router'>
          react-router v4
        </a><br/>
        <a key={1} style={styles.hyperLink} href='https://www.typescriptlang.org/docs/home.html'>
          typescript
        </a><br/>
        <a key={2} style={styles.hyperLink} href='https://github.com/mobxjs/mobx'>
          mobx
        </a><br/>
        <a key={3} style={styles.hyperLink} href='https://github.com/FormidableLabs/radium'>
          modular style with radium
        </a><br/>
        <a key={4} style={styles.hyperLink}
          href='https://github.com/rofrischmann/inline-style-prefixer/commit/bc71fd88a96497164e5e1f4a291301722428f780'>
          inline-style-prefixer
        </a><br/>
        <a key={5} style={styles.hyperLink} href='https://github.com/andreypopp/autobind-decorator'>
          autobind-decorator
        </a><br/>
      </div>
    );
  }
}

export default Tab1;
