import React, { Component } from 'react'

// Packages
import { Route, Switch } from 'react-router-dom'

// Views
import Calendar from '../../views/Calendar/Calendar'
import Dashboard from '../../views/Dashboard/Dashboard'

export default class Routes extends Component {
  render() {
    return (
      <>
        <Route path="/" exact component={Dashboard} />
        
        <Switch>
          <Route path="/Calendar" exact component={Calendar} />
        </Switch>
      </>
    )
  }
}
