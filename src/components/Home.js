import React from 'react'
import { Footer } from './Footer'
import { LogItButton } from './LogItButton'
import { LogsSection } from './LogsSection'
import { NavCard } from './NavCard'
import { SideProfileCard } from './SideProfileCard'
import dummy from "../assets/error.jpg"
import { MobileNav } from './MobileNav'
import { Profile } from './Profile'

export const Home = () => {
  return (
    <div className='homepage'>
      <LogItButton />
      <MobileNav />
      <aside data-aos="fade-left">
        <SideProfileCard />
        <NavCard />
      </aside>
      <main data-aos="fade-up">
        <LogsSection />
      </main>
    </div>
  )
}
