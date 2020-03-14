import React from 'react'

// Packages
import { shallow } from 'enzyme'

// Components
import Dashboard from './Dashboard'

const dashboard = shallow(<Dashboard />)

it('renders correctly', () => {
  expect(dashboard).toMatchSnapshot()
})
