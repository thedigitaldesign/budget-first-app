import React from 'react'

// Packages
import { shallow } from 'enzyme'
import axios from 'axios'

// Components
import PrimaryNav from './PrimaryNav'

describe('PrimaryNav', () => {
  const logo = shallow(<PrimaryNav />)

  it('renders correctly', () => {
    expect(logo).toMatchSnapshot()
  })

  describe('axios', () => {
    jest.mock('axios')

    // it('returns a json object for the nav', async () => {
    //   const data = {
    //     nav: [
    //       {
    //         title: 'Dashboard',
    //         icon: 'fal fa-info-circle',
    //         items: [
    //           {
    //             title: 'Dashboard',
    //             href: 'dashboard',
    //           },
    //         ],
    //       },
    //     ],
    //   }
  
    //   axios.get.mockImplementationOnce(() => Promise.resolve(data))

    //   await expect(fetchData('react')).resolves.toEqual(data)
    // })
  })

  
})
