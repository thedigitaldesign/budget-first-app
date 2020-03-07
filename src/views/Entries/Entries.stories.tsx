import React from 'react'

// Packages
import { storiesOf } from '@storybook/react'

// Components
import Entries from './Entries'

storiesOf('Views/Entries', module).add('Entries', () => {
  return (
    <div>
      <Entries />
    </div>
  )
})
