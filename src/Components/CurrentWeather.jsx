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
    const {highTemp, lowTemp, wind, rain, sunrise, sunset} = this.state.detailedWeather;

    return (
      <div className = {styles.currentWeatherContainer}>
        <MainWeather icon = {icon}
                     temperature = {temp}
                     weather = {weather}
        />
        <DetailedWeather highTemp = {highTemp}
                         lowTemp = {lowTemp}
                         wind = {wind}
                         rain = {rain}
                         sunrise = {sunrise}
                         sunset = {sunset}
        />
      </div>
    )
  }
}
