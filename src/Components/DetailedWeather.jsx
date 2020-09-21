import React, { Component } from 'react';
import Details from './Details';
import styles from './DetailedWeather.module.css';

export default class DetailedWeather extends Component {
  constructor(props) {
    super(props);
    this.state = {
      appTemp: this.props.appTemp,
      clouds: this.props.clouds,
      windSpd: this.props.windSpd,
      pressure: this.props.pressure,
      sunrise: this.props.sunrise,
      sunset: this.props.sunset
    }
  }
  
  render() {
    const { appTemp, clouds, windSpd, pressure, sunrise, sunset } = this.state;

    return (
      <div className = {styles.detailsContainer}>
        <div className = {styles.detailsContainerColumn}>
          <Details value= {appTemp} units = "Feels Like" />
          <Details value= {clouds} units = "Clouds" />
        </div>
        <div className = {styles.detailsContainerColumn}>
          <Details value= {windSpd} units = "Wind" />
          <Details value= {pressure} units = "Pressure" />
        </div>
        <div className = {styles.detailsContainerColumn}>
          <Details value= {sunrise} units = "Sunrise" />
          <Details value= {sunset} units = "Sunset" />
        </div>
      </div>
    )
  }
}
