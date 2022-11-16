import React from 'react'
import { Footer } from './Footer'
import { LogItButton } from './LogItButton'
import { LogsSection } from './LogsSection'
import { NavCard } from './NavCard'
import { SideProfileCard } from './SideProfileCard'
import dummy from "../assets/error.jpg"
import { MobileNav } from './MobileNav'

export const Home = () => {
  return (
    <div className='homepage'>
      <LogItButton />
      <MobileNav />
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
