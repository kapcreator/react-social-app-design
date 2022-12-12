import React, { useEffect, useState } from 'react'
import './Post.scss'
import { Link } from 'react-router-dom'
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import FavoriteOutlinedIcon from "@mui/icons-material/FavoriteOutlined";
import TextsmsOutlinedIcon from "@mui/icons-material/TextsmsOutlined";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import Comments from '../Comments/Comments';

const Post = ({ post, focus, setFocus }) => {
  const [isLiked, setIsLiked] = useState(false)
  const [commentsIsOpen, setCommentsIsOpen] = useState(false)

  const handleLikes = () => {
    setIsLiked((isLiked)=>!isLiked)
    // setFocus(post.id)
  }

  const handleComments = () => {
    setCommentsIsOpen((commentsIsOpen)=>!commentsIsOpen)
    setFocus(post.id)
  }

  useEffect(() => {
    if(commentsIsOpen) {
      if(focus !== post.id) setCommentsIsOpen(false)
    }
  }, [focus])

  return (
    <div className='post'>
      <div className="header">
        <Link to={`/profile/${post.userId}`} className="user">
          <img src={post.profilePic} />
          <span className='name'>{post.name}</span>
          <span className="date">1 min ago</span>
        </Link>
        <MoreHorizIcon className='btn' />
      </div>
      <div className="body">
        <p>{post.desc}</p>
        {post.img && <img src={post.img} />}
      </div>
      <div className="footer">
        <button className="btn" onClick={handleLikes}>
          {isLiked ? <FavoriteOutlinedIcon  /> : <FavoriteBorderOutlinedIcon />}
          18k Likes
        </button>
        <button className="btn" onClick={handleComments}>
          <TextsmsOutlinedIcon />
          104 Comments
        </button>
        <button className="btn">
          <ShareOutlinedIcon />
          Share
        </button>
      </div>
      {commentsIsOpen && <Comments />}
    </div>
  )
}

export default Post