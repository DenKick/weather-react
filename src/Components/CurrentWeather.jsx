import React, { Component } from 'react';
import MainWeather from './MainWeather';
import DetailedWeather from './DetailedWeather';
import styles from './CurrentWeather.module.css';

export default class CurrentWeather extends Component {
  render() {
    return (
      <div className = {styles.currentWeatherContainer}>
        <MainWeather icon = "wi wi-day-sunny" temperature = "21" weather = "Mostly Sunny" />
        <DetailedWeather highTemp = "25" lowTemp = "11" wind = "7 mph" rain = "0%" sunrise = "05.27" sunset = "20.57" />
      </div>
    )
  }
}
