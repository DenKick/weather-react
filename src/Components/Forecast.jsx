import React, { Component } from 'react';
import ForecastCard from './ForecastCard';
import styles from './Forecast.module.css';

export default class Forecast extends Component {
  render() {
    return (
      <div className = {styles.forecastContainer}>
        <ForecastCard />
        <ForecastCard />
        <ForecastCard />
        <ForecastCard />
        <ForecastCard />
        <ForecastCard />
      </div>
    )
  }
}
