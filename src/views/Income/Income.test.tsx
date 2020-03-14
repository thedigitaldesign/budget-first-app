import React from 'react'

// Packages
import { shallow } from 'enzyme'

// Components
import Income from './Income'

const income = shallow(<Income />)

it('renders correctly', () => {
  expect(income).toMatchSnapshot()
})
