import React from 'react'
import './landingpage.css'
import ExploreIcon from '@mui/icons-material/Explore';

function Landingpage() {
  return (
    <div className='Landingpage'>
      <div className='nav'>
        <img src='https://www.logo.wine/a/logo/LinkedIn/LinkedIn-Logo.wine.svg' alt='linkedIn logo'/>
      </div>
      <div className='nav_items'>
       <ul>
        <li><ExploreIcon/> Discover</li>
       </ul>
      </div>
    </div>
  )
}

export default Landingpage
