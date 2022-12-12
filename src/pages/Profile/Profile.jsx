import React, { useContext } from 'react'
import './Profile.scss'
import FacebookTwoToneIcon from "@mui/icons-material/FacebookTwoTone";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import PinterestIcon from "@mui/icons-material/Pinterest";
import TwitterIcon from "@mui/icons-material/Twitter";
import PlaceIcon from "@mui/icons-material/Place";
import LanguageIcon from "@mui/icons-material/Language";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/authContext'
import Posts from '../../components/Posts/Posts'

const Profile = () => {
  const { currentUser } = useContext(AuthContext)

  return (
    <div className='profile'>
      <div className="banner">
        <img src="https://images.pexels.com/photos/13440765/pexels-photo-13440765.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" className="cover" />
      </div>
      <div className="container">
        <div className="information">
          <img src="https://images.pexels.com/photos/13440765/pexels-photo-13440765.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" className="profile-pic" />
          <div className="left">
            <FacebookTwoToneIcon />
            <LinkedInIcon />
            <InstagramIcon />
            <PinterestIcon />
            <TwitterIcon />
          </div>
          <div className="center">
            <h1>{currentUser.name}</h1>
            <div className="links">
              <Link to='/'>
                <PlaceIcon />
                USA
              </Link>
              <Link to='/'>
                <LanguageIcon />
                kapcreator.com
              </Link>
            </div>
            <button>Follow</button>
          </div>
          <div className="right">
            <EmailOutlinedIcon />
            <MoreVertIcon />
          </div>
        </div>

        <Posts />
      </div>
    </div>
  )
}

export default Profile