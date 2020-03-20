import React, { Component } from 'react'

// Axios
import axios from 'axios'

export default class PrimaryNav extends Component {
  componentDidMount() {
    axios.get('./nav.json').then(response => {
      response.data.nav
    })
  }

  render() {
    return (
      <nav className="primary-nav">
        <div></div>
      </nav>
    )
  }
}
