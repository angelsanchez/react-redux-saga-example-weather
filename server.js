const express = require('express')
const webpack = require('webpack')
const path = require('path')

const PORT = process.env.PORT || 3000
const app = express()

if (process.env.NODE_ENV === 'development') {
  const config = require('./webpack.config.dev')
  const compiler = webpack(config)

  app.use(require('webpack-dev-middleware')(compiler, {
    noInfo: true,
    publicPath: config.output.publicPath
  }))

  app.use(require('webpack-hot-middleware')(compiler))

  app.use('/images', express.static(path.join(__dirname, '/images')))
} else {
  app.use('/', express.static(path.join(__dirname, '/dist')))
}

app.listen(PORT, 'localhost', (err) => {
  if (err) {
    console.error(err)
    return
  }
  console.log(`server initialized at http://localhost:${PORT}`)
})
