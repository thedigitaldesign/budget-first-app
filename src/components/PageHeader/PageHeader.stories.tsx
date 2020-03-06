import React from 'react'

// Packages
import { storiesOf } from '@storybook/react'

// Component
import PageHeader from './PageHeader'

storiesOf('Components/PageHeader', module).add('Page Header', () => {
  return (
    <div>
      <PageHeader />
    </div>
  )
})
