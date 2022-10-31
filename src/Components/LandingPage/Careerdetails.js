import React from 'react'

function Careerdetails({image,title,logo,subtitle,details}) {
  return (
    <div className='details'>
      <div className = 'indv_detail'>
        <img  src = {image} alt = {title} />
      </div>
    </div>
  )
}

export default Careerdetails