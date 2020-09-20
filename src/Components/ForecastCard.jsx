import React, { Component } from 'react';
import styles from './ForecastCard.module.css';

import weatherCode from './weather';

export default class ForecastCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      day: new Date(Date.parse(this.props.day)),
      icon: this.props.icon,
      temp: this.props.temp
    }
  }
  render() {
    const {day, icon, temp} = this.state;
    const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

    return (
      <div className = {styles.cardContainer} >
        <span className = {styles.day}>{days[day.getDay()]}</span>
        <i className = {weatherCode[icon]}></i>
        <span className = {styles.temp}>{Number(temp).toFixed(0)}°</span>
      </div>
    )
  }
}
