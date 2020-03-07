import React from 'react'

// Packages
import { storiesOf } from '@storybook/react'

// Components
import PrimaryNav from './PrimaryNav'

storiesOf('Components/PrimaryNav', module).add('Primary Nav', () => {
  return (
    <div>
      <PrimaryNav />
    </div>
  )
})
