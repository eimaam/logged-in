import React from 'react'
import { CgMail } from 'react-icons/cg'
import { FaInstagram, FaLinkedin, FaSnapchat, FaTwitter } from 'react-icons/fa'

export const Footer = () => {
  return (
    <footer>
        <h1>~ 👻 Logged ~</h1>
        <div className='flex'>
            <FaInstagram />
            <FaTwitter />
            <FaSnapchat />
            <CgMail />
        </div>
    </footer>
  )
}
