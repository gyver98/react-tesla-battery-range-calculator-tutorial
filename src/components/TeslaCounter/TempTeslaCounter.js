import React from 'react';
import './TeslaCounter.css';

const TempTeslaCounter = (props) => (
  <div className="tesla-counter">
    <p className="tesla-counter__title">{props.initValues.title}</p>
    <div className="tesla-counter__container cf">
      <div className="tesla-counter__item">
        <p className="tesla-counter__number">
          { props.currentValue }
          <span>{ props.initValues.unit }</span>
        </p>
        <div className="tesla-counter__controls">
          <button 
            onClick={(e) => {
              e.preventDefault();
              props.tempIncrement(props.currentValue)}} 
            disabled={props.currentValue >= props.initValues.max} 
          >
          </button>
          <button 
            onClick={(e) => { 
              e.preventDefault();
              props.tempDecrement(props.currentValue)}} 
            disabled={props.currentValue <= props.initValues.min} 
          >
          </button>
        </div>
      </div>
    </div>
  </div>  
);

TempTeslaCounter.propTypes = {
  currentValue: React.PropTypes.number,
  increment: React.PropTypes.func,
  decrement: React.PropTypes.func,
  initValues: React.PropTypes.object
}

export default TempTeslaCounter;