import React from 'react';
import './TeslaBattery.css';

class TeslaBattery extends React.Component {
  render() {
    return (
      <form className="tesla-battery">
        <h1>Range Per Charge</h1>
        <div class="tesla-battery__notice">
          <p>
            The actual amount of range that you experience will vary based 
            on your particular use conditions. See how particular use conditions 
            may affect your range in our simulation model.
          </p>
          <p>
            Vehicle range may vary depending on the vehicle configuration, 
            battery age and condition, driving style and operating, environmental 
            and climate conditions.
          </p>
        </div>
      </form>
    )
  }
}

export default TeslaBattery;