import {fillCityInput} from '../../pages/weatherPage'

export default function () {
  this.When(/^I write "([^"]*)" in the search input$/, cityName => {
    fillCityInput(cityName)
  })
}
