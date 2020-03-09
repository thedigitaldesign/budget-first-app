import React, { Component } from 'react'

// Styles
import './_Layout.scss'

// Components
import PageSidebar from '../components/PageSidebar/PageSidebar'

export default class _Layout extends Component {
  render() {
    return (
      <div className="page-container">
        <aside className="sidebar-menu">
          <PageSidebar />
        </aside>

        <main className="main-content">{this.props.children}</main>
      </div>
    )
  }
}
