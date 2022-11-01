import React from 'react'
import './testimonials.css'

function Testdata({image,title,description}) {
  return (

    <div className='test_data'>
    <div className = 'test_det'>
     <h2>{title}</h2>
        <p>{description}</p>
    </div>
    <div className='test_image'>
       <img src={image} alt = {title}/>
    </div>
  </div>

   
  )
}

export default Testdata