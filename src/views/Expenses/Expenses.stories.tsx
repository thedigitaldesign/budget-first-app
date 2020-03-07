import React from 'react'

// Packages
import { storiesOf } from '@storybook/react'

// Components
import Expenses from './Expenses'

storiesOf('Views/Expenses', module).add('Expenses', () => {
  return (
    <div>
      <Expenses />
    </div>
  )
})
