import express from 'express'
import webpack from 'webpack'
import webpackDevMiddleware from 'webpack-dev-middleware'
import webpackHotMiddleware from 'webpack-hot-middleware'
import webpackDevConfig from '../webpack.config.dev'

const app = express()
const compiler = webpack(webpackDevConfig)

app.use(webpackDevMiddleware(compiler, {
  noInfo: true,
  publicPath: webpackDevConfig.output.publicPath
}))
app.use(webpackHotMiddleware(compiler))

app.get('*', (req, res) => {
  const HTML = `
    <!DOCTYPE>
    <html>
      <head>
      </head>
      <body>
        <div id='react-view'></div>
        <script src='/static/bundle.js'></script>
      </body>
    </html>
  `
  res.send(HTML)
})

export default app
