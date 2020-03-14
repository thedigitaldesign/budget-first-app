import React from 'react'

// Packages
import { shallow } from 'enzyme'

// Components
import InfoCard from './InfoCard'

const card = shallow(<InfoCard />)

it('renders correctly', () => {
  expect(card).toMatchSnapshot()
})
