import React from 'react'

// Packages
import { shallow } from 'enzyme'

// Components
import _Layout from './_Layout'

const layout = shallow(<_Layout />)

it('renders correctly', () => {
  expect(layout).toMatchSnapshot()
})
