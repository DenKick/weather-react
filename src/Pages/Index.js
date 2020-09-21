import React, { Component } from 'react';
import styles from './Index.module.css';

import CurrentWeather from '../Components/CurrentWeather';
import City from '../Components/City';
import Forecast from '../Components/Forecast';
import weatherCode from '../Components/weather';

export default class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mainWeather: {
        icon: null,
        temp: null,
        weather: null
      },
      detailedWeather: {
        appTemp: null,
        clouds: null,
        wind: null,
        rain: null,
        sunrise: null,
        sunset: null
      },
      city: null,
      region: null,
      isLoaded: false,
      error: null
    }
  }

  componentDidMount() {
    const that = this;

    navigator.geolocation.watchPosition(position => {
      const lat = position.coords.latitude;
      const lon = position.coords.longitude;

      let apiKey = `3f323ac45ffd4f0d83323fa593986f16`;
      let apiCall = `https://api.weatherbit.io/v2.0/current?lat=${lat}&lon=${lon}&key=${apiKey}`;

      fetch(apiCall)
        .then(res => res.json())
        .then(response => {
          const data = response.data[0];
          console.log(response.data[0])
          that.setState({
            city: data.city_name,
            region: data.country_code,
            isLoaded: true,
            mainWeather: {
              icon: weatherCode[data.weather.icon],
              temp: Math.floor(data.temp),
              weather: data.weather.description
            },
            detailedWeather: {
              sunrise: data.sunrise,
              sunset: data.sunset,
              appTemp: data['app_temp'],
              clouds: data.clouds,
              windSpd: data.wind_spd,
              pressure: data.pres
            }
          })
        })
    })
  }

  render() {
    const {city, region, mainWeather, detailedWeather, isLoaded, error} = this.state;

    if (!isLoaded) {
      return <div className = {styles.loadingContainer}>Loading</div>
    } else if (error) {
      return <div>Error</div>
    } else {
      return (
        <div className = {styles.container}>
          <City city = {city} region = {region} />
          <CurrentWeather mainWeather = {mainWeather} detailedWeather = {detailedWeather} />
          <Forecast />
        </div>
      )
    }
  }
}
