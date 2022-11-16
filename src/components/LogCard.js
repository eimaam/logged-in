import React, { useState } from 'react'
import dummy from "../assets/eimaam.png"
import { FaHeart, FaRegHeart, FaShare, FaShareAlt } from "react-icons/fa"
import { ImageModal } from './ImageModal'

export const LogCard = ({
    avatar,
    fullName,
    username,
    image,
    log,
    likes,
    verified,
    LikesNum
}) => {
    const [noOfLikes, setNoOfLikes] = useState(likes)

    const [liked, setLiked] = useState(false)
    const [showModal, setShowModal] = useState(false)

    const handleLiked = (val) => {
        setLiked(prevData => !prevData)
        liked && setNoOfLikes(likes+1);
    }
    if(likes.toString().length == 4){
        likes = `${likes.toString().slice(0,1)}K`
    }else if(likes.toString().length == 5){
        likes = `${likes.toString().slice(0,2)}K`
    }else if(likes.toString().length == 10){
        likes = `${likes.toString().slice(0,1)}M`
    }

    console.log(likes.toString().length)

  return (
    <div className='log--card'>
        <div className='title'>
            <img src={avatar} alt="" />
            <div>
                <h3>{fullName} {verified && "👻"} </h3>
                <i>{`@${username}`}</i>
            </div>
        </div>
        <div className='log--section'>
            <p>
                {log}
            </p>
            {image && <img src={image} alt="" onClick={() => setShowModal(prev => !prev)}/>}
        </div>
        <div onClick={() => handleLiked(LikesNum)} className="options">
            {/* <p><FaHeart /></p> */}
            {liked 
            ? <p><FaHeart /> {likes}</p> 
            : <p><FaRegHeart /> {likes} </p>
            }
            <p><FaShareAlt /></p>
        </div>
        {showModal && <ImageModal image={image} handleClick={() => setShowModal(false)}/>}
    </div>
  )
}
