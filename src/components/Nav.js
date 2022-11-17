import React from 'react'
import logo from "../assets/logged-logo-white.png"


export const Nav = () => {
  return (
    <nav>
      <div className='nav--container'>
        <div>
          <img src={logo} alt="" />
        </div>
        <div>
            <h2> Logged~</h2>
        </div>
      </div>
    </nav>
  )
}
