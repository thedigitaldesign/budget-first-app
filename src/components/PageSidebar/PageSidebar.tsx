import React, { Component } from 'react'

// Styles
import './PageSidebar.scss'

// Components
import InfoCard from './InfoCard/InfoCard'
import PageLogo from './PageLogo/PageLogo'
import PrimaryNav from './PrimaryNav/PrimaryNav'

export default class PageSidebar extends Component {
  render() {
    return (
      <aside className="sidebar-menu column is-2 is-hidden-mobile">
        <PageLogo />
        <InfoCard />
        <PrimaryNav />
      </aside>
    )
  }
}
