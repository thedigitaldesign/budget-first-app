import React from 'react'

// Packages
import { shallow } from 'enzyme'

// Components
import PageLogo from './PageLogo'

const logo = shallow(<PageLogo />)

it('renders correctly', () => {
  expect(logo).toMatchSnapshot()
})
