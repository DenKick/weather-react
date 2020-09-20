import React, { Component } from 'react';
import styles from './Details.module.css';

export default class Details extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: this.props.value,
      units: this.props.units
    }
  }

  render() {
    const { value, units } = this.state;

    return (
      <div className = {styles.detailsContainer}>
        <span className = {styles.value}>{value}</span> 
        <span>{units}</span>
      </div>
    )
  }
}
