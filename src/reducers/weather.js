import weatherActionTypes from '../constants/actions/weather'

const initialState = {
  weatherList: [],
  loading: false,
  error: null,
  searchText: ''
}

function setSearchText (state, {searchText}) {
  return {
    ...state,
    searchText
  }
}

function fetchWeather (state) {
  return {
    ...state,
    weatherList: [],
    error: null,
    loading: true
  }
}

function fetchWeatherSuccess (state, {weatherList}) {
  return {
    ...state,
    error: null,
    loading: false,
    weatherList
  }
}

function fetchWeatherError (state, {error}) {
  return {
    ...state,
    error,
    loading: false
  }
}

export default function (state = initialState, action) {
  switch (action.type) {
    case weatherActionTypes.SET_SEARCH_TEXT:
      return setSearchText(state, action)
    case weatherActionTypes.FETCH_WEATHER:
      return fetchWeather(state, action)
    case weatherActionTypes.FETCH_WEATHER_SUCCESS:
      return fetchWeatherSuccess(state, action)
    case weatherActionTypes.FETCH_WEATHER_ERROR:
      return fetchWeatherError(state, action)
    default:
      return state
  }
}
