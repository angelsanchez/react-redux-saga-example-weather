import {expect} from 'chai'
import weatherActions from '../../../src/actions/weather'
import weatherReducer from '../../../src/reducers/weather'


describe('reducers', () => {
  describe('weather', () => {
    it('should handle initial state', () => {
      const initialState = {
        searchText: '',
        weatherList: [],
        loading: false,
        error: null
      }

      expect(weatherReducer(undefined, {})).deep.equal(initialState)
    })

    it('should handle set search text', () => {
      const currentState = {
        searchText: ''
      }

      const expectedState = {
        searchText: 'city name'
      }

      expect(weatherReducer(currentState, weatherActions.setSearchText(expectedState.searchText))).deep.equal(expectedState)
    })

    it('should handle fetch weather', () => {
      const currentState = {
        searchText: 'city name',
        weatherList: [{name: 'Test'}],
        loading: false,
        error: {name: 'Test'}
      }

      const expectedState = {
        searchText: 'city name',
        weatherList: [],
        loading: true,
        error: null
      }

      expect(weatherReducer(currentState, weatherActions.fetchWeather())).deep.equal(expectedState)
    })

    it('should handle fetch weather success', () => {
      const weatherList = [{name: 'Test'}]
      const currentState = {
        searchText: 'city name',
        weatherList: [],
        loading: true,
        error: {name: 'Test'}
      }

      const expectedState = {
        searchText: 'city name',
        weatherList,
        loading: false,
        error: null
      }

      expect(weatherReducer(currentState, weatherActions.fetchWeatherSucces(weatherList))).deep.equal(expectedState)
    })

    it('should handle fetch weather error', () => {
      const error = {name: 'ErrorTest'}
      const weatherList = [{name: 'Test'}]
      const currentState = {
        searchText: 'city name',
        weatherList,
        loading: true,
        error: null
      }

      const expectedState = {
        searchText: 'city name',
        weatherList,
        loading: false,
        error
      }

      expect(weatherReducer(currentState, weatherActions.fetchWeatherError(error))).deep.equal(expectedState)
    })
  })
})
