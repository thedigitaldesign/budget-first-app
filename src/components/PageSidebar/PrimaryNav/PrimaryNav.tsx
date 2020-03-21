import React, { Component } from 'react'

// Axios
import axios from 'axios'

export default class PrimaryNav extends Component {
  componentDidMount() {
    axios.get('./nav.json').then(response => {
      console.log(response.data.nav)
    })
  }

  render() {
    const section_root = (
      <a href="" className="section-root">title</a>
    )

    const section_children = (
      <ul>
        <li><a href="items.href">items.title</a></li>
      </ul>
    )

    return (
      <nav className="primary-nav">
        <ul className="nav-menu">
          {section_root}
          {section_children}
        </ul>
      </nav>
    )
  }
}
