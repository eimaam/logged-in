import React from 'react'
import dummy from '../assets/error.jpg'

export const SideProfileCard = () => {
  return (
    <div className='profile--card'>
        <div>
            <img src={dummy} alt="" />
        </div>
        <div className='info'>
            <p>@eimaam</p>
            <h2>Imam Dahir Dan-Azumi</h2>
            <i>Frontend Software Engineer | Crypto Enthusiast | Graphic Designer  </i>
        </div>
        <div className='flex-col'>
            <button className='btn--small btn--white'>Edit Profile</button>
            <button className='btn--small btn--white'>Account Settings</button>
        </div>
    </div>
  )
}
