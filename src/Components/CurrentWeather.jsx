import React, { Component } from 'react';
import MainWeather from './MainWeather';
import DetailedWeather from './DetailedWeather';
import styles from './CurrentWeather.module.css';

export default class CurrentWeather extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mainWeather: this.props.mainWeather,
      detailedWeather: this.props.detailedWeather
    }
  }

  render() {
    const {icon, temp, weather} = this.state.mainWeather;
    const {appTemp, clouds, windSpd, pressure, sunrise, sunset} = this.state.detailedWeather;

    return (
      <div className = {styles.currentWeatherContainer}>
        <MainWeather icon = {icon}
                     temperature = {temp}
                     weather = {weather}
        />
        <DetailedWeather appTemp = {appTemp + '°'}
                         clouds = {clouds + '%'}
                         windSpd = {Math.floor(windSpd) + ' m/s'}
                         pressure = {Math.floor(pressure) + ' mb'}
                         sunrise = {sunrise}
                         sunset = {sunset}
        />
      </div>
    )
  }
}
