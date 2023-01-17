import React from 'react'
import './options.css'
import PanoramaIcon from '@mui/icons-material/Panorama';
import SmartDisplayIcon from '@mui/icons-material/SmartDisplay';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import NewspaperIcon from '@mui/icons-material/Newspaper';
function Options({name1,name2,name3,name4, formx , setForm}) {
  const openForm = () =>{
    setForm(true)
  }
  return (
    <div className = 'options'>
     <p onClick={()=>openForm()}><PanoramaIcon className = "name1"/><span className='text'>{name1}</span></p>
     <p><SmartDisplayIcon className = "name2"/><span className='text'>{name2}</span></p>
    <p> <BusinessCenterIcon className = "name3"/><span className='text'>{name3}</span></p>
    <p> <NewspaperIcon className = "name4"/> <span className='text'>{name4}</span></p>
    </div>
  )
}

export default Options    