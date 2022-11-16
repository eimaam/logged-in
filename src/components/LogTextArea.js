import React from 'react'
import { FaImage, FaLink } from 'react-icons/fa'

export const LogTextArea = () => {
  return (
    <form>
        <textarea 
        name="" id="" 
        placeholder='...type a log'
        rows={1}
        maxLength={280}
        />
        {/* <input type="text" placeholder='enter url to embed image'/> */}
        {/* <input type="file" /> */}
        <div>
          <div className='flex' style={{gap: "1rem"}}>
            <FaImage className='icon' />
            <FaLink  className='icon'/>
          </div>
          <button type='submit'>👻 Log~it </button>    
        </div>
    </form>
  )
}
