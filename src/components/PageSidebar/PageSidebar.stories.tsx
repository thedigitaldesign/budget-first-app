import React from 'react'

// Packages
import { storiesOf } from '@storybook/react'

// Component
import PageSidebar from './PageSidebar'

storiesOf('Components/PageSidebar', module).add('Page Sidebar', () => {
  return(
    <div>
      <PageSidebar />
    </div>
  )
})
