import React, { Component } from 'react'

// Routes
import Routes from './utils/routes/Routes'

// Packages
import { BrowserRouter } from 'react-router-dom'

// Views
import Layout from './views/_Layout'

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Layout>
          <Routes />
        </Layout>
      </BrowserRouter>
    )
  }
}
