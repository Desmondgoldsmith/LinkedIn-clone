import React from 'react'
import './landingpage.css'
import ExploreIcon from '@mui/icons-material/Explore';
import PeopleIcon from '@mui/icons-material/People';
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';
import WorkIcon from '@mui/icons-material/Work';
import { Link } from 'react-router-dom';

function Landingpage() {
  return (
    <div className='Landingpage'>
      <Link to = '/home'>
      <div className='nav'>
        <img src='https://www.logo.wine/a/logo/LinkedIn/LinkedIn-Logo.wine.svg' alt='linkedIn logo'/>
      </div>
      </Link>
      <div className='nav_items'>
       <ul>
        <li><ExploreIcon/> Discover</li>
        <li><PeopleIcon/> People</li>
        <li><OndemandVideoIcon/> Learning</li>
        <li><WorkIcon/> Jobs</li>
        <li className='divider'>|</li>

       </ul>
       <button className='join'>Join now</button>
       <button className='sign'>Sign in</button>
      </div>
    </div>
  )
}

export default Landingpage
