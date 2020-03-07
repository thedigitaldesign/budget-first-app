import React from 'react'

// Packages
import { storiesOf } from '@storybook/react'

// Components
import Dashboard from './Dashboard'

storiesOf('Views/Dashboard', module).add('Dashboard', () => {
  return (
    <div>
      <Dashboard />
    </div>
  )
})
