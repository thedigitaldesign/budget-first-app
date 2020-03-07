import React from 'react'

// Packages
import { storiesOf } from '@storybook/react'

// Components
import Calendar from './Calendar'

storiesOf('Views/Calendar', module).add('Calendar', () => {
  return (
    <div>
      <Calendar />
    </div>
  )
})
