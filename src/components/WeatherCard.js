import React, {PropTypes} from 'react'
import styles from './WeatherCard.css'

const WeatherCard = ({icon, temp, description, city, country}) => (
  <div className={styles.wrapper}>
    <img src={`images/weather/${icon}.svg`} />

    <h3>{description} {temp} ºC</h3>

    <h1>{city}, {country}</h1>
  </div>
)

WeatherCard.propTypes = {
  icon: PropTypes.string.isRequired,
  temp: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
  country: PropTypes.string.isRequired
}

export default WeatherCard
