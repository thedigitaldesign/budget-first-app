import React, { Component } from 'react'
import { connect } from 'react-redux'

// Actions
import { GetPrimaryNav } from '../../../redux/PrimaryNav/action'

// Axios
// import axios from 'axios'

// Models
// import { PrimaryNav as IPrimaryNav } from '../../../models'

// const primaryNav = new PrimaryNavAction()

class PrimaryNav extends Component {
  componentDidMount() {
    // const foo = new NavAction()
    // console.log('fooooooooooooooooooo')
    // console.log(foo)
    // // axios.get('./nav.json').then(response => {
    // //   console.log(response.data.nav)
    // // })
  }

  render() {
    // const { SidebarNav } = this.props

    console.log(this.props)

    const section_root = (
      <a href="" className="section-root">
        title
      </a>
    )

    const section_children = (
      <ul>
        <li>
          <a href="items.href">items.title</a>
        </li>
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

const mapStateToProps = (state: any) => {
  console.log('-->', state)
  console.log('-->', state.SidebarNav)
  console.log('-->', state.SidebarNav.PrimaryNav)

  return { SidebarNav: state.SidebarNav.PrimaryNav }
}

const mapDispatchToProps = (dispatch: any) => {
  return {
    GetPrimaryNav: () => dispatch(GetPrimaryNav()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PrimaryNav)
