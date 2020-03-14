import React from 'react'

// Packages
import { shallow } from 'enzyme'

// Components
import Calendar from './Calendar'

const calendar = shallow(<Calendar />)

it('renders correctly', () => {
  expect(calendar).toMatchSnapshot()
})
