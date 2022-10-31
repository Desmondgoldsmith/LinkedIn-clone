import React from 'react'

function Careerdetails({image,title,logo,subtitle,details}) {
  return (
    <div className='details'>
      <div className = 'image'>
        <img  src = {image} alt = {title} />
      </div>
      <div className='indv_detail'>
         <h4>{title}</h4>
         <h5>{logo}{subtitle}</h5>
         <p>{details}</p>
      </div>
    </div>
  )
}

export default Careerdetails