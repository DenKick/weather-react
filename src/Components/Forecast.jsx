import React, { Component } from 'react';
import ForecastCard from './ForecastCard';
import styles from './Forecast.module.css';

export default class Forecast extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      isLoaded: false,
      error: null
    }
  }

  componentDidMount() {
    let that = this;

    navigator.geolocation.watchPosition(function(position) {

      let lat = position.coords.latitude;
      let lon = position.coords.longitude;

      let apiKey = `3f323ac45ffd4f0d83323fa593986f16`;
      let apiCall = `https://api.weatherbit.io/v2.0/forecast/daily?&days=6&lat=${lat}&lon=${lon}&key=${apiKey}`;

      fetch(apiCall)
      .then(res => res.json())
      .then(result => {
        console.log(result.data);
        that.setState({
          isLoaded: true,
          items: result.data
        });
      },
        error => {
          that.setState({
            isLoaded: true,
            error: error
          })
        }
      )
    })
  }

  render() {
    const { isLoaded, error, items } = this.state;

    if (!isLoaded) {
      return <div className = {styles.forecastLoadingContainer}>Loading</div>
    } else if (error) {
      return <div>Error</div>
    } else {
      return (
        <div className = {styles.forecastContainer}>
          {items.map(item => (
            <ForecastCard key = {item.datetime} day = {item.datetime} temp = {item.high_temp} icon = {item.weather.icon} />
          ))}
        </div>
      )
    }
  }
}
