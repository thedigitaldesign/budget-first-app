import React from 'react'

// Packages
import { shallow } from 'enzyme'

// Components
import Entries from './Entries'

const entries = shallow(<Entries />)

it('renders correctly', () => {
  expect(entries).toMatchSnapshot()
})
