import React, { Component } from 'react'

// Styles
import './PageSidebar.scss'

// Components
import InfoCard from './InfoCard/InfoCard'
import PageLogo from './PageLogo/PageLogo'

export default class PageSidebar extends Component {
  render() {
    return (
      <aside className="page-sidebar">
        <PageLogo />

        <InfoCard />

        
      </aside>
    )
  }
}
