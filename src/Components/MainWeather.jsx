import React, { Component } from 'react';
import styles from './MainWeather.module.css';

export default class MainWeather extends Component {
  constructor(props) {
    super(props);
    this.state = {
      icon: this.props.icon,
      temperature: this.props.temperature,
      weather: this.props.weather
    }
  }

  render() {
    const { temperature, weather, icon } = this.state;

    return (
      <div className={styles.mainWeatherContainer}>
        <div className={styles.mainWeatherIcon}>
          <i className={icon}></i>
        </div>
        <div className={styles.mainWeatherData}>
          <span className={styles.dataTemperature}>{temperature}°</span>
          <span className={styles.dataWeather}>{weather}</span>
        </div>
      </div>
    )
  }
}