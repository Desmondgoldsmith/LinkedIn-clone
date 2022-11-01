import React from 'react'
import './testimonials.css'
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

function Testdata({image,title,description}) {
  return (
    <div className='content'>
    <div className='nav'>
       <p><ChevronLeftIcon/> previous</p>
       <p>next<ChevronRightIcon/></p>
     </div> 
      <div className = 'wrapper'>
       <div className='text'>
     <h2>{title}</h2>
        <p>{description}</p>
    </div>
    <div className='test_image'>
        <img src={image} alt = {title}/>
      </div></div>
    
    </div>
  )
}

export default Testdata