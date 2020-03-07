import React from 'react'

// Packages
import { storiesOf } from '@storybook/react'

// Components
import InfoCard from './InfoCard'

storiesOf('Components/InfoCard', module).add('Info Card', () => {
  return (
    <div>
      <InfoCard />
    </div>
  )
})
