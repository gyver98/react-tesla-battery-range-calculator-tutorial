export const speedUp = (value) => {
  return {
    type: 'SPEED_UP',
    value,
    step: counterDefaultVal.speed.step,
    maxValue: counterDefaultVal.speed.max
  }
}

export const speedDown = (value) => {
  return {
    type: 'SPEED_DOWN',
    value,
    step: counterDefaultVal.speed.step,
    minValue: counterDefaultVal.speed.min
  }
}

export const temperatureUp = (value) => {
  return {
    type: 'TEMPERATURE_UP',
    value,
    step: counterDefaultVal.temperature.step,
    maxValue: counterDefaultVal.temperature.max
  }
}

export const temperatureDown = (value) => {
  return {
    type: 'TEMPERATURE_DOWN',
    value,
    step: counterDefaultVal.temperature.step,
    minValue: counterDefaultVal.temperature.min
  }
}

