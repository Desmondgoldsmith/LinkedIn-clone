import React from 'react'
import './testimonals.css'

function Testdata({image,title,description}) {
  return (
    <div className='content'>
     <div className='text'>
     <h2>{title}</h2>
        <p>{description}</p>
    </div>
    <div className='test_image'>
 <div className='nav'>
       <p><ChevronLeftIcon/> previous</p>
       <p>next<ChevronRightIcon/></p>
     </div> 
        <img src='{image}' alt = '{title}'/>
      </div>
    </div>
  )
}

export default Testdata