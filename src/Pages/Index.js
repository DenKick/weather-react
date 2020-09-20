import React, { Component } from 'react';
import CurrentWeather from '../Components/CurrentWeather';
import styles from './Index.module.css';

import City from '../Components/City';
import Forecast from '../Components/Forecast';

export default class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mainWeather: {
        icon: 'wi wi-day-sunny',
        temp: '21',
        weather: 'Mostly Sunny'
      },
      detailedWeather: {
        highTemp: '25°',
        lowTemp: '11°',
        wind: '7 mph',
        rain: '0%',
        sunrise: '05:27',
        sunset: '20:57'
      },
      city: 'Saint Petersburg',
      region: 'RU'
    }
  }
  render() {
    const {city, region, mainWeather, detailedWeather} = this.state;

    return (
      <>
        <div className = {styles.container}>
          <City city = {city} region = {region} />
          <CurrentWeather mainWeather = {mainWeather} detailedWeather = {detailedWeather} />
          <Forecast />
        </div>
      </>
    )
  }
}
