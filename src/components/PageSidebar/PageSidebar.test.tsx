import React from 'react'

// Packages
import { shallow } from 'enzyme'

// Components
import PageSidebar from './PageSidebar'

describe('PageSidebar', () => {
  const sidebar = shallow(<PageSidebar />)

  it('renders correctly', () => {
    expect(sidebar).toMatchSnapshot()
  })

  it('contains an InfoCard component', () => {
    expect(sidebar.find('InfoCard').exists()).toBe(true)
  })

  it('contains an PageLogo component', () => {
    expect(sidebar.find('PageLogo').exists()).toBe(true)
  })

  it('contains an PrimaryNav component', () => {
    expect(sidebar.find('PrimaryNav').exists()).toBe(true)
  })
})
