import {searchWeather} from '../../pages/weatherPage'

export default function () {
  this.When(/^I search the weather$/, () => {
    searchWeather()
  })
}
