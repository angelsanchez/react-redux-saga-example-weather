import {expect} from 'chai'
import weatherActionsTypes from '../../../src/constants/actions/weather'
import weatherActions from '../../../src/actions/weather'


describe('actions', () => {
  describe('weather', () => {
    it('setSearchText should create SET_SEARCH_TEXT action', () => {
      const searchText = 'City Name'
      expect(weatherActions.setSearchText(searchText)).deep.equal({ type: weatherActionsTypes.SET_SEARCH_TEXT, searchText })
    })

    it('fetchWeather should create FETCH_WEATHER action', () => {
      expect(weatherActions.fetchWeather()).deep.equal({ type: weatherActionsTypes.FETCH_WEATHER })
    })

    it('fetchWeatherSucces should create FETCH_WEATHER_SUCCESS action', () => {
      const weatherList = [{name: 'Test'}]
      expect(weatherActions.fetchWeatherSucces(weatherList)).deep.equal({ type: weatherActionsTypes.FETCH_WEATHER_SUCCESS, weatherList })
    })

    it('fetchWeatherError should create FETCH_WEATHER_ERROR action', () => {
      const error = {name: 'Test'}
      expect(weatherActions.fetchWeatherError(error)).deep.equal({ type: weatherActionsTypes.FETCH_WEATHER_ERROR, error })
    })
  })
})
