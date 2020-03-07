import React from 'react'

// Packages
import { storiesOf } from '@storybook/react'

// Component
import PageLogo from './PageLogo'

storiesOf('Components/PageLogo', module).add('Page Logo', () => {
  return (
    <div>
      <PageLogo />
    </div>
  )
})
