import React from 'react'
import './navbar.css'
import HomeIcon from '@mui/icons-material/Home';
import GroupIcon from '@mui/icons-material/Group';
import WorkIcon from '@mui/icons-material/Work';
import TextsmsIcon from '@mui/icons-material/Textsms';
import NotificationsIcon from '@mui/icons-material/Notifications';
import SearchIcon from '@mui/icons-material/Search';
import AppsIcon from '@mui/icons-material/Apps';

function Navbar() {
  return (
    <div className='Navbar fixed top-0 left-0 right-0 z-30'>
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
          <li><TextsmsIcon/><span className = 'notification bg-red-500 text-white pl-1 pr-1 rounded-full -mt-[20px] ml-[16px]'>6</span><span className='nav_text'>Messaging</span></li>
          <li><NotificationsIcon/><span className='nav_text'>Notification</span></li>
          <li> <img src = 'https://media.licdn.com/dms/image/D4E03AQGwZt1JT4mh4g/profile-displayphoto-shrink_200_200/0/1673142753502?e=1678924800&v=beta&t=N-mjxLo38JjH-E9kZC9bXXLhOqTFLcSNuIw3dBc85wk' alt='profile'/><span className='nav_text'> Me</span></li>
          <li className = 'line'></li>
          <li className = "work"><AppsIcon/> Work</li>
          <li className = 'free'>Try premium for free</li>
         </ul>
        </div>

    </div>
  )
}

export default Navbar