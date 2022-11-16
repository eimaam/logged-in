import React from 'react'
import { FaAt, FaCode, FaInfo, FaMailBulk, FaUser } from 'react-icons/fa'
import { CgMail, CgMoreVerticalAlt  } from 'react-icons/cg'
import { HiDocumentText, HiMail  } from 'react-icons/hi'

export const NavCard = () => {
  return (
    <ul className='nav--card'>
        <li><FaUser className='icon'/> Profile</li>
        <li><CgMoreVerticalAlt className='icon'/> Check More Apps</li>
        <li><HiDocumentText className='icon'/>  Privacy Policy</li>
        <li><FaCode className='icon'/> Source Code</li>
        <li><FaInfo className='icon'/> About Us</li>
        <li><HiMail className='icon'/> Contact Us</li>
    </ul>
  )
}
