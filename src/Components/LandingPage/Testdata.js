import React from 'react'
import './testimonals.css'

function Testdata({image,title,description}) {
  return (
    <div className='content'>
     <div className='text'>
     <h2>{title}</h2>
        <p>{description}</p>
    </div>
    </div>
  )
}

export default Testdata