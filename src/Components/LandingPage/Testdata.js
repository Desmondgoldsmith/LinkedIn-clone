import React from 'react'
import './testimonials.css'

function Testdata({image,title,description}) {
  return (
    <div className='content'>
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