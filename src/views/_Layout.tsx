import React, { Component } from 'react'

// Styles
import './_Layout.scss'

// Components
import PageSidebar from '../components/PageSidebar/PageSidebar'

export default class _Layout extends Component {
  render() {
    return (
      <div className="page-container">
        <div className="columns full-height no-margin">
          <aside className="sidebar-menu column is-2">
            <PageSidebar />
          </aside>

          <main className="main-content column">{this.props.children}</main>
        </div>
      </div>
    )
  }
}
