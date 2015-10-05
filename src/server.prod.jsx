import express from 'express'
import React from 'react'
import { renderToString } from 'react-dom/server'
import { RoutingContext, match } from 'react-router'
import createLocation from 'history/lib/createLocation'
import routes from './shared/routes'

const app = express()

app.use('/static', express.static('build'))

app.use((req, res) => {
  const location = createLocation(req.url)

  match({ routes, location }, (error, redirectLocation, renderProps) => {
    if (redirectLocation)
      res.redirect(301, redirectLocation.pathname + redirectLocation.search)
    else if (error)
      res.status(500).send(error.message)
    else if (renderProps == null)
      res.status(404).send('Not found')
    else {
      const componentHTML = renderToString(<RoutingContext {...renderProps}/>)
      const HTML = `
        <!DOCTYPE>
        <html>
          <head>
          </head>
          <body>
            <div id='react-view'>${componentHTML}</div>
            <script src='/static/bundle.js'></script>
          </body>
        </html>
      `
      res.send(HTML)
    }
  })
})

export default app
