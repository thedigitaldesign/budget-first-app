import React, { Component } from 'react'

// Packages
import { Route, Switch } from 'react-router-dom'

// Views
import Calendar from '../../views/Calendar/Calendar'
import Dashboard from '../../views/Dashboard/Dashboard'
import Entries from '../../views/Entries/Entries'
import Expenses from '../../views/Expenses/Expenses'
import Income from '../../views/Income/Income'

export default class Routes extends Component {
  render() {
    return (
      <>
        <Route path="/" exact component={Dashboard} />
        
        <Switch>
          <Route path="/Calendar" exact component={Calendar} />
          <Route path="/Entries" exact component={Entries} />
          <Route path="/Expenses" exact component={Expenses} />
          <Route path="/Income" exact component={Income} />
        </Switch>
      </>
    )
  }
}
