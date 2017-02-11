import React from 'react';
import './TeslaBattery.css';
import TeslaNotice from '../components/TeslaNotice/TeslaNotice';
import TeslaCar from '../components/TeslaCar/TeslaCar';
import TeslaStats from '../components/TeslaStats/TeslaStats';
import TeslaCounter from '../components/TeslaCounter/TeslaCounter';
import { getModelData } from '../services/BatteryService';

class TeslaBattery extends React.Component {
  constructor(props) {
    super(props);

    this.calculateStats = this.calculateStats.bind(this);
    this.statsUpdate = this.statsUpdate.bind(this);
    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);

    this.state = {
      carstats: [],
      config: {
        speed: 55,
        temperature: 20,
        climate: true,
        wheels: 19
      }
    }
  }

  calculateStats = (models, value) => {
    const dataModels = getModelData();
    return models.map(model => {
      const { speed, temperature, climate, wheels } = value;
      const miles = dataModels[model][wheels][climate ? 'on' : 'off'].speed[speed][temperature];
      return {
        model,
        miles
      };
    });
  }

  statsUpdate() {
    const carModels = ['60', '60D', '75', '75D', '90D', 'P100D'];
    // Fetch model info from BatteryService and calculate then update state
    this.setState({
      carstats: this.calculateStats(carModels, this.state.config)
    })  
  }

  componentDidMount() {
     this.statsUpdate(); 
  }

  increment(e, title) {
    e.preventDefault();
    var currentValue, maxValue, step;
    if (title === 'Speed') {
      currentValue = this.state.config.speed;
      maxValue = this.props.counterDefaultVal.speed.max;
      step = this.props.counterDefaultVal.speed.step;
    } else {
      currentValue = this.state.config.temperature;
      maxValue = this.props.counterDefaultVal.temperature.max;
      step = this.props.counterDefaultVal.temperature.step;
    }
    
    if(currentValue < maxValue) {
      const newValue = currentValue + step;
      const config = {...this.state.config};
      // update config state
      title === 'Speed' ? config['speed'] = newValue : config['temperature'] = newValue;
      // update our state
      //this.setState({ config }, () => {this.statsUpdate()});
      this.setState({ config });
    }
  }

  decrement(e, title) {
    e.preventDefault();
    //debugger;
    var currentValue, minValue, step;
    if (title === 'Speed') {
      currentValue = this.state.config.speed;
      minValue = this.props.counterDefaultVal.speed.min;
      step = this.props.counterDefaultVal.speed.step;
    } else {
      currentValue = this.state.config.temperature;
      minValue = this.props.counterDefaultVal.temperature.min;
      step = this.props.counterDefaultVal.temperature.step;
    }
    
    if(currentValue > minValue) {
      const newValue = currentValue - step;
      const config = {...this.state.config};
      // update config state
      title === 'Speed' ? config['speed'] = newValue : config['temperature'] = newValue;
      // update our state
      //this.setState({ config }, () => {this.statsUpdate()});
      this.setState({ config });
    }
  }
  
  render() {
    const { config, carstats } = this.state;
    return (
      <form className="tesla-battery">
        <h1>Range Per Charge</h1>
        <TeslaCar wheelsize={config.wheels}/>
        <TeslaStats carstats={carstats}/>
        <div className="tesla-controls cf">
          <TeslaCounter 
            currentValue={this.state.config.speed} 
            initValues={this.props.counterDefaultVal.speed}
            increment={this.increment}
            decrement={this.decrement} 
          />
          <div className="tesla-climate-container cf">
            <TeslaCounter 
              currentValue={this.state.config.temperature} 
              initValues={this.props.counterDefaultVal.temperature}
              increment={this.increment}
              decrement={this.decrement}
            />
          </div>
        </div>
        <TeslaNotice />
      </form>
    )
  }
}

export default TeslaBattery;