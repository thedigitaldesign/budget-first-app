import React from 'react'

// Packages
import { shallow } from 'enzyme'

// Components
import PageSidebar from './PageSidebar'

const sidebar = shallow(<PageSidebar />)

it('renders correctly', () => {
  expect(sidebar).toMatchSnapshot()
})
