import React from 'react'
import { LogTextArea } from './LogTextArea'
import { LogCard } from "./LogCard"
import { logs } from '../fakeData'
import { Footer } from './Footer'

export const LogsSection = () => {
  return (
    <div className='logs--section'>
        <LogTextArea />
        <hr />
        <div className='selection--menu'>
            <h2>LOGS</h2>
            <h2>MEDIAs</h2>
        </div>
        <div className='logs'>
          {logs.map((item, index) => {
            return <>
                    <LogCard 
                    key={index}
                    avatar={item.avatar}
                    fullName={item.fullName}
                    username={item.username}
                    log={item.log}
                    image={item.image}
                    verified={item.verified}
                    likes={item.likes}
                    likesNum={item.likes}
                    />
                    <hr />
                  </>
          })}
        </div>
    </div>
  )
}
