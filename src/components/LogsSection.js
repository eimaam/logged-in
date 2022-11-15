import React from 'react'
import { LogTextArea } from './LogTextArea'
import { LogCard } from "./LogCard"

export const LogsSection = () => {
  return (
    <div className='logs--section'>
        <LogTextArea />
        <div className='selection--menu'>
            <h2>LOGS</h2>
            <h2>MEDIAs</h2>
        </div>
        <div className='logs'>
          <LogCard />
          <hr />
          <LogCard />
          <hr />
          <LogCard />
          <hr />
          <LogCard />
          <hr />
          <LogCard />
          <hr />
        </div>
    </div>
  )
}
