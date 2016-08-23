import { fork } from 'redux-saga/effects'
import * as weatherSagas from './weather'

export default function * root () {
  yield [
    fork(weatherSagas.watchFetchWeather)
  ]
}
