import React from 'react'

export const LogTextArea = () => {
  return (
    <form>
        <textarea 
        name="" id="" 
        placeholder='...type a log'
        rows={5}
        />
        {/* <input type="text" placeholder='enter url to embed image'/> */}
        {/* <input type="file" /> */}
        <button type='submit'>LOG!</button>    
    </form>
  )
}
