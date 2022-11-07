import React from 'react'
import './navbar.css'
import React, { useEffect, useState } from 'react'
import HomeIcon from '@mui/icons-material/Home';
import GroupIcon from '@mui/icons-material/Group';
import WorkIcon from '@mui/icons-material/Work';
import TextsmsIcon from '@mui/icons-material/Textsms';
import NotificationsIcon from '@mui/icons-material/Notifications';
import SearchIcon from '@mui/icons-material/Search';
import AppsIcon from '@mui/icons-material/Apps';

function Navbar() {
  const [show,handleShow] =useState(false);
 useEffect(()=>{
    window.addEventListener("scroll",() =>{
        if(window.scrollY > 100){
            handleShow(true)
        }else {
            handleShow(false);
        }
    });
    return ()=>{
        window.removeEventListener("scroll", null);
    }
 },[])
  return (
    <div className='Navbar'>
        <div className = 'logo_section'>
          <img src = 'https://www.seekpng.com/png/full/8-84419_linkedin-logo-png-icon-linkedin-logo-png.png' alt = 'logo'/>
          {/* <SearchIcon className = 'spair_search'/> */}
          <div className = 'search_bar'>
          <SearchIcon className = 'search_icon'/>
           <input placeholder = "search"></input>
           </div>
        </div>
        <div className = 'nav_section'>
         <ul>
          <li className='active'><HomeIcon/><span className='nav_text'>Home</span> </li>
          <li><GroupIcon/><span className='nav_text'>My Network</span></li>
          <li><WorkIcon/><span className='nav_text'>Jobs</span></li>
          <li><TextsmsIcon/><span className = 'notification'>6</span><span className='nav_text'>Messaging</span></li>
          <li><NotificationsIcon/><span className='nav_text'>Notification</span></li>
          <li><img src = 'https://media.licdn.com/dms/image/C4D03AQEHVf4AElfMgg/profile-displayphoto-shrink_100_100/0/1614036542904?e=1672876800&v=beta&t=NXHR3zkArWTj0f45HM4O8RYg0OGsAIFk9qwu2L9SsDg'/><span className='nav_text'> Me</span></li>
          <li className = 'line'></li>
          <li className = "work"><AppsIcon/> Work</li>
          <li className = 'free'>Try premium for free</li>
         </ul>
        </div>

    </div>
  )
}

export default Navbar