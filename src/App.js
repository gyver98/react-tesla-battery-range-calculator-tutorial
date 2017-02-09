import React, { Component } from 'react';
import './App.css';
import TeslaBattery from './containers/TeslaBattery';

class App extends Component {
  render() {
    return (
      <div className="App">
        <TeslaBattery />    
      </div>
    );
  }
}

export default App;
