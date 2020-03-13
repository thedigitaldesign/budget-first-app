import React, { Component } from 'react'

// Axios
import axios from 'axios'

export default class PrimaryNav extends Component {
  render() {
    let nav

    axios.get('./nav.json')
      .then(response => {
        nav = response.data.nav
      })

    console.log()

    return (
      <nav className="primary-nav">
        
      </nav>
    )
  }
}
