import React from 'react'

// Packages
import { storiesOf } from '@storybook/react'

// Components
import Income from './Income'

storiesOf('Views/Income', module).add('Income', () => {
  return (
    <div>
      <Income />
    </div>
  )
})
