import React from 'react'
import WeatherCard from './WeatherCard'
import styles from './WeatherSearch.css'

const WeatherSearch = ({searchText, loading, error, weatherList = [], actions}) => (
  <div>
    <div className={styles.searchBox}>
      <input
        type='text'
        value={searchText}
        placeholder='City'
        onChange={event => actions.setSearchText(event.target.value)}
        onKeyPress={event => {
          if (event.key === 'Enter') {
            actions.fetchWeather()
          }
        }} />

      <div>
        <button onClick={() => actions.fetchWeather()} disabled={loading}>
          {loading ? 'Loading...' : 'Get weather'}
        </button>
      </div>
      {
        error && <div>Error trying to fetch a forecast</div>
      }
    </div>
    {
      weatherList.map(weather => <WeatherCard key={weather.id} {...weather} />)
    }
  </div>
)

export default WeatherSearch
