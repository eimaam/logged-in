import React from 'react'
import { FaAt, FaCode, FaInfo, FaMailBulk, FaUser } from 'react-icons/fa'
import { CgMail, CgMoreVerticalAlt  } from 'react-icons/cg'
import { HiDocumentText, HiMail  } from 'react-icons/hi'
import { Link } from 'react-router-dom'

export const NavCard = () => {
  return (
    <ul className='nav--card'>
        <li>
          <Link to="/">
          <h2>👻</h2> Logs
          </Link>
        </li>
        <li>
          <Link to="/profile">
            <FaUser className='icon'/> Profile
          </Link>
        </li>
        <li><Link to=""><CgMoreVerticalAlt className='icon'/> Check More Apps</Link></li>
        <li><Link to=""><HiDocumentText className='icon'/>  Privacy Policy</Link></li>
        <li><Link to=""><FaCode className='icon'/> Source Code</Link></li>
        <li><Link to=""><FaInfo className='icon'/> About Us</Link></li>
        <li><Link to=""><HiMail className='icon'/> Contact Us</Link></li>
    </ul>
  )
}
