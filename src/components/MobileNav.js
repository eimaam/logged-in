import React from 'react'
import { CgGhostCharacter, CgHome } from 'react-icons/cg'
import { FaUser } from 'react-icons/fa'
import { MdSettingsSuggest } from 'react-icons/md'

export const MobileNav = () => {
  return (
    <div className='mobile--nav'>
      <CgHome />
      <MdSettingsSuggest />
      <FaUser />
    </div>
  )
}
