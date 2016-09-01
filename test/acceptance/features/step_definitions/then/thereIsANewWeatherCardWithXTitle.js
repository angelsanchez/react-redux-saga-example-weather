import {expect} from 'chai'
import {getWeatherCardsTitles} from '../../pages/weatherPage'

export default function () {
  this.Then(/^there is a new weather card with "([^"]*)" title in the result list$/, (expectedText) => {
    const cardsTitles = getWeatherCardsTitles()
    expect(expectedText).to.be.oneOf(cardsTitles)
  })
}
