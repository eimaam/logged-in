import React, { useState } from 'react'
import { FaLink } from 'react-icons/fa'
import { HiLocationMarker } from 'react-icons/hi'
import dummy from '../assets/eimaam.png'
import { logs } from '../fakeData'
import { ImageModal } from './ImageModal'
import { LogCard } from './LogCard'
import { NavCard } from './NavCard'
import { SideProfileCard } from './SideProfileCard'

export const Profile = () => {
    const [showModal, setShowModal] = useState(false)
  return (
    <div className='profile'>
    <aside>
        <NavCard />
    </aside>
    <main>
        <div className='header'>
            <div onClick={() => setShowModal(prevState => !prevState)}>
                <img src={dummy} alt="" />
            </div>
            <div>
                <h2>Imam Dahir Dan-Azumi</h2>
                <p>@eimaam</p>
            </div>
        </div>
        <div className='extra--info'>
            <p className='flex'>
                <HiLocationMarker />Abuja, Nigeria
            </p>
            <p className='flex'>
                <FaLink />www.eimaam.dev
            </p>
        </div>
        <div className='bio'>
            <p>Lorem ipsum dolor sit amet consectetur <br /> adipisicing elit. Sint dolores excepturi illum expedita suscipit nobis modi velit atque ea voluptatem magnam earum exercitationem veritatis architecto harum quibusdam, nemo, dolorem sapiente!</p>
        </div>
        <hr />
        <div className='view--options'>
            <h2>Logs</h2>
            <h2>Media</h2>
        </div>
        <hr />
        <div>
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
        {showModal && <ImageModal image={dummy} handleClick={setShowModal(false)}/> }
    </main>
    </div>
  )
}
