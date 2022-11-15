import React from 'react'
import { LogItButton } from './LogItButton'
import { LogsSection } from './LogsSection'
import { NavCard } from './NavCard'
import { SideProfileCard } from './SideProfileCard'

export const Home = () => {
  return (
    <div className='homepage'>
      <LogItButton />
      <aside>
        <SideProfileCard />
        <NavCard />
      </aside>
      <main>
        <LogsSection />
      </main>
    </div>
  )
}
