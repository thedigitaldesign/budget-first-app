import React from 'react'

// Packages
import { storiesOf } from '@storybook/react'

// Component
import _Layout from './_Layout'

storiesOf('Components/_Layout', module).add('Layout', () => {
  return(
    <div>
      <_Layout />
    </div>
  )
})
