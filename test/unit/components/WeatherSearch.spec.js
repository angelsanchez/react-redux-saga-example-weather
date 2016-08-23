import React from 'react'
import {spy} from 'sinon'
import {expect} from 'chai'
import {shallow} from 'enzyme'
import WeatherSearch from '../../../src/components/WeatherSearch'
import WeatherCard from '../../../src/components/WeatherCard'


describe('components', () => {
  describe('<WeatherSearch />', () => {
    it('should have the following structure', () => {
      const wrapper = shallow(<WeatherSearch />)
      expect(wrapper.type()).equal('div')

      const searchBox = wrapper.children().at(0)
      expect(searchBox.type()).equal('div')
      expect(searchBox.prop('className')).equal('WeatherSearch_searchBox')

      const inputSearch = searchBox.children().at(0)
      expect(inputSearch.type()).equal('input')
      expect(inputSearch.prop('type')).equal('text')
      expect(inputSearch.prop('placeholder')).equal('City')

      const searchButtonContainer = searchBox.children().at(1)
      expect(searchButtonContainer.type()).equal('div')
      expect(searchButtonContainer.find('button').text()).equal('Get weather')
    })

    it('should call to actions.setSearchText when search input text changes', () => {
      const setSearchText = spy()
      const props = {
        actions: {
          setSearchText
        }
      }
      const wrapper = shallow(<WeatherSearch {...props} />)
      const fakeEvent = {target: {value: 'City Name'}}
      wrapper.find('input').simulate('change', fakeEvent)
      expect(setSearchText.calledOnce).equal(true)
      expect(setSearchText.calledWith(fakeEvent.target.value)).equal(true)
    })

    it('should call to actions.fetchWeather when the user press enter in the search input', () => {
      const fetchWeather = spy()
      const props = {
        actions: {
          fetchWeather
        }
      }
      const wrapper = shallow(<WeatherSearch {...props} />)
      const fakeEvent = {key: 'Enter'}
      wrapper.find('input').simulate('keyPress', fakeEvent)
      expect(fetchWeather.calledOnce).equal(true)
    })

    it('should call to actions.fetchWeather when search button is clicked', () => {
      const fetchWeather = spy()
      const props = {
        actions: {
          fetchWeather
        }
      }
      const wrapper = shallow(<WeatherSearch {...props} />)
      wrapper.find('button').simulate('click')
      expect(fetchWeather.calledOnce).equal(true)
    })

    it('should disable search button when loading and show "Loading..." text', () => {
      const props = {
        loading: true
      }
      const wrapper = shallow(<WeatherSearch {...props} />)
      expect(wrapper.find('button').prop('disabled')).equal(true)
      expect(wrapper.find('button').text()).equal('Loading...')
    })

    it('should not render error message', () => {
      const props = {
        error: false
      }
      const wrapper = shallow(<WeatherSearch {...props} />)
      expect(wrapper.find('.WeatherSearch_searchBox').contains(<div>Error trying to fetch a forecast</div>)).equal(false)
    })

    it('should render error message inside searchBox', () => {
      const props = {
        error: true
      }
      const wrapper = shallow(<WeatherSearch {...props} />)
      expect(wrapper.find('.WeatherSearch_searchBox').contains(<div>Error trying to fetch a forecast</div>)).equal(true)
    })

    it('should not render WeatherCard elements', () => {
      const wrapper = shallow(<WeatherSearch />)
      expect(wrapper.find('WeatherCard')).length(0)
    })

    it('should render WeatherCard elements', () => {
      const props = {
        weatherList: [
          {id: '1', icon: '', temp: 0, description: '', city: '', country: ''},
          {id: '2', icon: '', temp: 0, description: '', city: '', country: ''}
        ]
      }
      const wrapper = shallow(<WeatherSearch {...props} />)
      expect(wrapper.find('WeatherCard')).length(2)
    })

    it('should pass weatherList item props to WeatherCard elements', () => {
      const weatherCardProps = {
        id: '1',
        icon: 'icon',
        temp: 22,
        description: 'description',
        city: 'city',
        country: 'country'
      }
      const props = {
        weatherList: [weatherCardProps]
      }
      const wrapper = shallow(<WeatherSearch {...props} />)
      expect(wrapper.find('WeatherCard')).length(1)
      expect(wrapper.find('WeatherCard').key()).equal(weatherCardProps.id)
      expect(wrapper.find('WeatherCard').props()).deep.equal(weatherCardProps)
    })
  })
})
