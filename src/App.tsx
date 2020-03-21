import React, { Component } from 'react'

// Styles
import 'bulma'
import './assets/scss/general.scss'

// Routes
import Routes from './utils/routes/Routes'

// Packages
import { BrowserRouter } from 'react-router-dom'
import { createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux'

// Views
import Layout from './views/_Layout'

// Reducers
import { RootReducer } from './redux/reducer'

const reducers = combineReducers(RootReducer)
const store = createStore(reducers)

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <Layout>
            <Routes />
          </Layout>
        </BrowserRouter>
      </Provider>
    )
  }
}
