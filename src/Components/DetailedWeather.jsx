import React, { Component } from 'react';
import Details from './Details';
import styles from './DetailedWeather.module.css';

export default class DetailedWeather extends Component {
  constructor(props) {
    super(props);
    this.state = {
      highTemp: this.props.highTemp,
      lowTemp: this.props.lowTemp,
      wind: this.props.wind,
      rain: this.props.rain,
      sunrise: this.props.sunrise,
      sunset: this.props.sunset
    }
  }
  
  render() {
    const { highTemp, lowTemp, wind, rain, sunrise, sunset } = this.state;

    return (
      <div className = {styles.detailsContainer}>
        <div className = {styles.detailsContainerColumn}>
          <Details value= {highTemp} units = "High" />
          <Details value= {lowTemp} units = "Low" />
        </div>
        <div className = {styles.detailsContainerColumn}>
          <Details value= {wind} units = "Wind" />
          <Details value= {rain} units = "Rain" />
        </div>
        <div className = {styles.detailsContainerColumn}>
          <Details value= {sunrise} units = "Sunrise" />
          <Details value= {sunset} units = "Sunset" />
        </div>
      </div>
    )
  }
}
