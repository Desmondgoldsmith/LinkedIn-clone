import React from 'react'
import './navbar.css'
import HomeIcon from '@mui/icons-material/Home';
import GroupIcon from '@mui/icons-material/Group';

function Navbar() {
  return (
    <div className='Navbar'>
      <div className = 'navbar_wrapper'>
        <div className = 'logo_section'>
          <img src = '' alt = ''/>
          <div className = 'search_bar'>
           <input placeholder = "search"></input>
           </div>
        </div>
        <div className = 'nav_section'>
         <ul>
          <li><HomeIcon/> Home</li>
          <li><GroupIcon/>My Network</li>
          <li>Jobs</li>
          <li>Messaging</li>
          <li>Notification</li>
          <li>Me</li>
         </ul>
        </div>


        </div>
    </div>
  )
}

export default Navbar