import React from 'react'
import WeatherPage from './WeatherPage'

const App = (props) => (
  <div>

    <WeatherPage />

    {
      (() => {
        if (process.env.NODE_ENV === 'development') {
          const DevTools = require('./DevTools')
          return <DevTools />
        }
      })()
    }

  </div>
)

export default App
