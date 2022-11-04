import React from 'react'
import './navbar.css'

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
          <li>Home</li>
          <li>My Network</li>
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