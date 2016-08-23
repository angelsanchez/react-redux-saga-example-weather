import {expect} from 'chai'
import {takeEvery} from 'redux-saga'
import {call, put, select} from 'redux-saga/effects'
import fetchWeatherService from '../../../src/services/fetchWeather'
import weatherActions from '../../../src/actions/weather'
import weatherActionsTypes from '../../../src/constants/actions/weather'
import {watchFetchWeather, fetchWeather} from '../../../src/sagas/weather'
import weatherSelector from '../../../src/selectors/weather'

describe('sagas', () => {
  describe('weather', () => {
    it('fetchWeather should trigger on every FETCH_WEATHER action', () => {
      const generator = watchFetchWeather()

      expect(generator.next().value).deep.equal(
        takeEvery.apply(null, [weatherActionsTypes.FETCH_WEATHER, fetchWeather]).next().value
      )
    })

    it('fetchWeather success', () => {
      const generator = fetchWeather()

      expect(generator.next().value).deep.equal(
        select(weatherSelector.getSearchText)
      , 'saga should get the search text from application state')

      const searchText = 'City Name'

      expect(generator.next(searchText).value).deep.equal(
        call(fetchWeatherService, searchText)
      , 'saga should call to fetch weather service')

      const serviceResponse = [{name: 'ResponseTest'}]
      expect(generator.next(serviceResponse).value).deep.equal(
        put(weatherActions.fetchWeatherSucces(serviceResponse))
      , 'saga should emit a fetchWeatherSuccess action to Redux')

      expect(generator.next().done).equal(true)
    })

    it('fetchWeather error', () => {
      const generator = fetchWeather()

      expect(generator.next().value).deep.equal(
        select(weatherSelector.getSearchText)
        , 'saga should get the search text from application state')

      const searchText = 'City Name'

      expect(generator.next(searchText).value).deep.equal(
        call(fetchWeatherService, searchText)
        , 'saga should call to fetch weather service')

      const error = {name: 'ErrorTest'}
      expect(generator.throw(error).value).deep.equal(
        put(weatherActions.fetchWeatherError(error))
      , 'saga should emit a fetchWeatherError action to Redux')
    })
  })
})
