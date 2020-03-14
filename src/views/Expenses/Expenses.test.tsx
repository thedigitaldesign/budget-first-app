import React from 'react'

// Packages
import { shallow } from 'enzyme'

// Components
import Expenses from './Expenses'

const expenses = shallow(<Expenses />)

it('renders correctly', () => {
  expect(expenses).toMatchSnapshot()
})
