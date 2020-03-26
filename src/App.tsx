import React, { Component } from 'react'

// Styles
import 'bulma'
import './assets/scss/general.scss'

// Routes
import Routes from './utils/routes/Routes'

// Packages
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'

// Views
import Layout from './views/_Layout'

// Store
import { Store } from './redux/Store'

export default class App extends Component {
  render() {
    return (
      <Provider store={Store}>
        <BrowserRouter>
          <Layout>
            <Routes />
          </Layout>
        </BrowserRouter>
      </Provider>
    )
  }
}
