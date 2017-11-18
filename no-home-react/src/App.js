import React, { Component } from 'react';

//interface
import Interface from './components/interface/interface'

//levels
import LevelRenderer from './components/levels/levelRenderer';



class App extends Component {
  render() {
    return (
      <div>
        <Interface />
        <LevelRenderer />
      </div>
    );
  }
}

export default App;
