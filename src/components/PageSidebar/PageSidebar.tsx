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
      <>
        <PageLogo />
        <InfoCard />
        <PrimaryNav />
      </>
    )
  }
}
