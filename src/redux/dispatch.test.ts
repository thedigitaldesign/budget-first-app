// Packages
import {  } from 'enzyme'

// Dispatcher
import * as dispatch from './dispatch'

describe('Dispatch', () => {
  it('should contain data for `nav`', () => {
    expect(dispatch.nav).toMatchObject({ FETCH_NAV_REQUEST: 'FETCH_NAV_REQUEST' })
  })
})
