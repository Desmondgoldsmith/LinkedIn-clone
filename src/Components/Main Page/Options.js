import React from 'react'
import './options.css'
import PanoramaIcon from '@mui/icons-material/Panorama';
import SmartDisplayIcon from '@mui/icons-material/SmartDisplay';
import WorkIcon from '@mui/icons-material/Work';
import NewspaperIcon from '@mui/icons-material/Newspaper';
function Options({name1,name2,name3,name4}) {
  return (
    <div className = 'options'>
     <PanoramaIcon className = "name1"/><p>{name1}</p>
     <SmartDisplayIcon className = "name2"/><p>{name2}</p>
     <WorkIcon className = "name3"/><p>{name3}</p>
     <NewspaperIcon className = "name4"/> <p>{name4}</p>
    </div>
  )
}

export default Options    