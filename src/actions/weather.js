import weatherActionTypes from '../constants/actions/weather'

export default {
  setSearchText: searchText => ({ type: weatherActionTypes.SET_SEARCH_TEXT, searchText }),
  fetchWeather: () => ({ type: weatherActionTypes.FETCH_WEATHER }),
  fetchWeatherSucces: weatherList => ({ type: weatherActionTypes.FETCH_WEATHER_SUCCESS, weatherList }),
  fetchWeatherError: error => ({ type: weatherActionTypes.FETCH_WEATHER_ERROR, error })
}
