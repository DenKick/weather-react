import React, { Component } from 'react';
import styles from './ForecastCard.module.css';

export default class ForecastCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      day: 'Mon',
      icon: 'wi wi-day-sunny',
      temp: '25'
    }
  }
  render() {
    const {day, icon, temp} = this.state;

    return (
      <div className = {styles.cardContainer} >
        <span className = {styles.day}>{day}</span>
        <i className = {icon}></i>
        <span className = {styles.temp}>{temp}°</span>
      </div>
    )
  }
}
