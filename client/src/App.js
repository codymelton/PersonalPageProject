import React, { Component } from 'react';
import {container} from './App.css';
import {Navigation} from './components'

class App extends Component {
  render() {
    return (
      <div className={container}>
        <Navigation />
        {this.props.children}
      </div>
    );
  }
}

export default App;
