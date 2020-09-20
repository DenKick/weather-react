import React, { Component } from 'react';
import MainWeather from './MainWeather';

export default class CurrentWeather extends Component {
  render() {
    return (
      <MainWeather icon = "wi wi-day-sunny" temperature = "21" weather = "Mostly Sunny" />
    )
  }
}
