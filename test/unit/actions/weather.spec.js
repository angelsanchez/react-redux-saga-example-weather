import {expect} from 'chai'
import weatherActions from '../../../src/actions/weather'

describe('actions', () => {
  describe('weather', () => {
    it('setSearchText should create SET_SEARCH_TEXT action', () => {
      const searchText = 'City Name'
      expect(weatherActions.setSearchText(searchText)).deep.equal({ type: 'SET_SEARCH_TEXT', searchText })
    })

    it('fetchWeather should create FETCH_WEATHER action', () => {
      expect(weatherActions.fetchWeather()).deep.equal({ type: 'FETCH_WEATHER' })
    })

    it('fetchWeatherSucces should create FETCH_WEATHER_SUCCESS action', () => {
      const weatherList = [{name: 'Test'}]
      expect(weatherActions.fetchWeatherSucces(weatherList)).deep.equal({ type: 'FETCH_WEATHER_SUCCESS', weatherList })
    })

    it('fetchWeatherError should create FETCH_WEATHER_ERROR action', () => {
      const error = {name: 'Test'}
      expect(weatherActions.fetchWeatherError(error)).deep.equal({ type: 'FETCH_WEATHER_ERROR', error })
    })
  })
})
