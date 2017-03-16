import React from 'react';
import './TeslaBattery.css';
import TeslaNotice from '../components/TeslaNotice/TeslaNotice';
import TeslaCar from '../components/TeslaCar/TeslaCar';
import TeslaStats from '../components/TeslaStats/TeslaStats';
import TeslaCounter from '../components/TeslaCounter/TeslaCounter';
import TeslaClimate from '../components/TeslaClimate/TeslaClimate';
import TeslaWheels from '../components/TeslaWheels/TeslaWheels';

class TeslaBattery extends React.Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    // state
    const { wheelsValue, 
            climateValue,
            temperatureLimit, 
            speedValue,
            speedInitValue,
            temperatureValue,
            temperatureInitValue,
            carstats} = this.props;
    // dispatch
    const { speedIncrement, 
            speedDecrement,
            tempIncrement, 
            tempDecrement,
            handleChangeClimate,
            handleChangeWheel } = this.props;
    return (
      <form className="tesla-battery">
        <h1>Range Per Charge</h1>
        <TeslaCar wheelsize={wheelsValue} />
        <TeslaStats carstats={carstats} />
        <div className="tesla-controls cf">
          <TeslaCounter
            currentValue={speedValue}
            initValues={speedInitValue}
            increment={speedIncrement}
            decrement={speedDecrement}
          />
          <div className="tesla-climate-container cf">
            <TeslaCounter
              currentValue={temperatureValue}
              initValues={temperatureInitValue}
              increment={tempIncrement}
              decrement={tempDecrement}
            />
            <TeslaClimate
              value={climateValue}
              limit={temperatureLimit}
              handleChangeClimate={handleChangeClimate}
            />
          </div>
          <TeslaWheels
            value={wheelsValue}
            handleChangeWheels={handleChangeWheel}
          />
        </div>
        <TeslaNotice />
      </form>
    )
  }
}

export default TeslaBattery;