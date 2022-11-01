import React from 'react'
import './testimonials.css'
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
function Testimonals() {
  return (
    <div className='Testimonials'>
      <div className='content'>
      
      <div className='text'>
       
     <h2>Let the right people know you’re open to work</h2>
        <p>With the Open To Work feature, you can privately tell recruiters or publicly share with the LinkedIn community that you are looking for new job opportunities.</p>
    </div>
 <div className='test_image'>
 <div className='nav'>
       <p><ChevronLeftIcon/> previous</p>
       <p>next<ChevronRightIcon/></p>
     </div> 
        <img src='https://static-exp1.licdn.com/aero-v1/sc/h/dbvmk0tsk0o0hd59fi64z3own' alt = 'testimonial_image'/>
      </div>
      </div>
    </div>
  )
}

export default Testimonals