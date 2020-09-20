import React, { Component } from 'react';
import styles from './City.module.css';

export default class City extends Component {
  constructor(props) {
    super(props);
    this.state = {
      city: this.props.city,
      region: this.props.region,
      date: new Date()
    }
  }

  render() {
    const { city, region, date } = this.state;
    const days = ['Sunday', 'Monday', 'Thuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
    let dateString = `${days[date.getDay()]}, ${date.getDate()}'th of ${months[date.getMonth()]}`;

    return (
      <div className = {styles.cityContainer}>
        <span className = {styles.cityName}>{city}, {region}</span>
        <span className = {styles.dateString}>{dateString}</span>
      </div>
    )
  }
}
