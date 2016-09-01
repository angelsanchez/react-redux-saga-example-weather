
export function fillCityInput (text) {
  browser.setValue('[placeholder=City]', text)
}

export function searchWeather () {
  browser.click('button=Get weather')
}

export function getWeatherCardsTitles () {
  browser.waitForExist('.WeatherCard_wrapper')
  return browser.elements('.WeatherCard_wrapper h1').value.map(({ELEMENT: weatherCardTitleId}) => {
    return browser.elementIdText(weatherCardTitleId).value
  })
}
