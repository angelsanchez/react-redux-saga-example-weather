import React from 'react'
import {expect} from 'chai'
import {shallow} from 'enzyme'
import WeatherCard from '../../../src/components/WeatherCard'


describe('components', () => {
  describe('<WeatherCard />', () => {
    it('should have the following structure', () => {
      const props = {
        icon: '',
        temp: 0,
        description: '',
        city: '',
        country: ''
      }

      const wrapper = shallow(<WeatherCard {...props} />)
      expect(wrapper.get(0).type).equal('div')
      expect(wrapper.get(0).props.className).equal('WeatherCard_wrapper')

      const children = wrapper.children()
      expect(children.length).to.equal(3)
      expect(children.get(0).type).equal('img')
      expect(children.get(1).type).equal('h3')
      expect(children.get(2).type).equal('h1')
    })

    it('should render the weather information', () => {
      const props = {
        icon: 'icon',
        temp: 22.45,
        description: 'Description test',
        city: 'City Name',
        country: 'Country Name'
      }

      const wrapper = shallow(<WeatherCard {...props} />)
      expect(wrapper.find('h1').text()).equal(`${props.city}, ${props.country}`)
      expect(wrapper.find('h3').text()).equal(`${props.description} ${props.temp} ºC`)
      expect(wrapper.find('img').prop('src')).equal(`images/weather/${props.icon}.svg`)
    })
  })
})
