import React, { Component } from 'react';
import './App.css';
import Header from './components/Header/Header';
import TeslaBattery from './containers/TeslaBattery';
import appReducer from './reducers/teslaRangeApp';

const counterDefaultVal = {
 speed: {
   title: "Speed",
   unit: "mph",
   step: 5,
   min: 45,
   max: 70
 },
 temperature: {
   title: "Outside Temperature",
   unit: "°",
   step: 10,
   min: -10,
   max: 40
  }
 };

const store = createStore(appReducer);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div>
          <Header />
          <TeslaBattery counterDefaultVal={counterDefaultVal}/>
        </div>
      </Provider>
    );
  }
}

export default App;



