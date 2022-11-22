import React from 'react'
import PanoramaIcon from '@mui/icons-material/Panorama';
import SmartDisplayIcon from '@mui/icons-material/SmartDisplay';
import WorkIcon from '@mui/icons-material/Work';
import NewspaperIcon from '@mui/icons-material/Newspaper';
function Options({name1,name2,name3,name4}) {
  return (
    <div className = 'options'>
     <PanoramaIcon/><p>{name1}</p>
     <SmartDisplayIcon/><p>{name2}</p>
     <WorkIcon/><p>{name3}</p>
     <NewspaperIcon/>
    </div>
  )
}

export default Options    