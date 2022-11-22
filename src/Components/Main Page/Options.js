import React from 'react'
import './options.css'
import PanoramaIcon from '@mui/icons-material/Panorama';
import SmartDisplayIcon from '@mui/icons-material/SmartDisplay';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import NewspaperIcon from '@mui/icons-material/Newspaper';
function Options({name1,name2,name3,name4}) {
  return (
    <div className = 'options'>
     <p><PanoramaIcon className = "name1"/><span className='text1'>{name1}</span></p>
     <SmartDisplayIcon className = "name2"/><p>{name2}</p>
     <BusinessCenterIcon className = "name3"/><p>{name3}</p>
     <NewspaperIcon className = "name4"/> <p>{name4}</p>
    </div>
  )
}

export default Options    