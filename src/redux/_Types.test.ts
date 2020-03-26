// Packages
import {  } from 'enzyme'

// Dispatcher
import * as type from './Types'

describe('Types', () => {
  it('should contain data for `nav`', () => {
    expect(type.PrimaryNav).toMatchSnapshot()
  })
})
