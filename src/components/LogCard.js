import React from 'react'
import dummy from "../assets/error.jpg"

export const LogCard = () => {
  return (
    <div className='log--card'>
        <div className='title'>
            <img src={dummy} alt="" />
            <div>
                <h3>Imam Dahir Dan-Azumi</h3>
                <i>@eimaam</i>
            </div>
        </div>
        <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam natus voluptates ea eius iusto quasi. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam natus voluptates ea eius iusto quasi.
        </p>
        <div>
            <p>Like</p>
            <p>Share</p>
        </div>
    </div>
  )
}
