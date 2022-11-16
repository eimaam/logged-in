import React from 'react'

export const ImageModal = ({image, handleClick}) => {
  return (
    <div className='image--modal'>
      <div>
        <img src={image} alt="" />
      </div>
      <button onClick={handleClick}>CLOSE</button>
    </div>
  )
}
