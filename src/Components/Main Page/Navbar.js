import React from 'react'
import './navbar.css'
import HomeIcon from '@mui/icons-material/Home';
import GroupIcon from '@mui/icons-material/Group';
import WorkIcon from '@mui/icons-material/Work';
import TextsmsIcon from '@mui/icons-material/Textsms';
import NotificationsIcon from '@mui/icons-material/Notifications';

function Navbar() {
  return (
    <div className='Navbar'>
      <div className = 'navbar_wrapper'>
        <div className = 'logo_section'>
          <img src = 'https://brandlogos.net/wp-content/uploads/2016/06/linkedin-logo-512x512.png' alt = 'logo'/>
          <div className = 'search_bar'>
           <input placeholder = "search"></input>
           </div>
        </div>
        <div className = 'nav_section'>
         <ul>
          <li><HomeIcon/> Home</li>
          <li><GroupIcon/>My Network</li>
          <li><WorkIcon/>Jobs</li>
          <li><TextsmsIcon/>Messaging</li>
          <li><NotificationsIcon/>Notification</li>
          <li><img src = ''/> Me</li>
         </ul>
        </div>


        </div>
    </div>
  )
}

export default Navbar