import React from 'react'
import {expect} from 'chai'
import {mount} from 'enzyme'
import {spy} from 'sinon'
import {Provider} from 'react-redux'
import weatherActions from '../../../src/actions/weather'
import WeatherPage, {mapDispatchToProps, mapStateToProps} from '../../../src/containers/WeatherPage'

const createFakeStore = state => ({
  default: () => {},
  subscribe: () => {},
  dispatch: () => {},
  getState: () => ({ ...state })
})

describe('containers', () => {
  describe('<WeatherPage />', () => {
    it('should map weather state props', () => {
      const state = {
        weather: {
          searchText: '',
          weatherList: [],
          loading: false,
          error: null
        }
      }

      expect(mapStateToProps(state)).deep.equal(state.weather)
    })

    it('should map weather actions creators in a prop called "actions"', () => {
      const fakeDispatch = spy()
      const mappedActions = mapDispatchToProps(fakeDispatch)

      const expectedActionsPropNames = Object.keys(weatherActions)
      const actionsPropNames = Object.keys(mappedActions.actions)
      expect(actionsPropNames).deep.equal(expectedActionsPropNames, 'mapped actions should have the same name that weather actions')

      actionsPropNames.forEach(prop => {
        mappedActions.actions[prop]()
      })
      expect(fakeDispatch.callCount).equal(actionsPropNames.length, 'dispatch function should be called (use bindActionCreators)')
    })

    it('should mount a WeatherSearch presentational component', () => {
      const state = {
        weather: {
          searchText: '',
          weatherList: [],
          loading: false,
          error: null
        }
      }

      const fakeStore = createFakeStore(state)

      const app = mount(
        <Provider store={fakeStore}>
          <WeatherPage />
        </Provider>
      )

      expect(app.find('WeatherSearch').length).equal(1)
    })
  })
})
