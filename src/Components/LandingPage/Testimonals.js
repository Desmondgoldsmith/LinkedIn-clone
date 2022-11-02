import React from 'react'
import './testimonials.css'
import Testdata from './Testdata';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';



function Testimonals() {
  return (
    <div className='Testimonials'>
      
      <div className='testimoial_det'>
        <div className='det_t'>
       <p></p>
       <p><span className='left'><ChevronLeftIcon/> previous </span>  next<ChevronRightIcon/></p>
        </div>
        <div className='testimonial_cards'>
        <Testdata 
        image = "https://static-exp1.licdn.com/aero-v1/sc/h/dbvmk0tsk0o0hd59fi64z3own"
        title = "Let the right people know you’re open to work"
        description = "With the Open To Work feature, you can privately tell recruiters or publicly share with the LinkedIn community that you are looking for new job opportunities."
       />
        <Testdata 
        image = "https://static-exp1.licdn.com/aero-v1/sc/h/2r8kd5zqpi905lkzsshdlvvn5"
        title = "Conversations today could lead to opportunity tomorrow"
        description = "Sending messages to people you know is a great way to strengthen relationships as you take the next step in your career."
       />

        <Testdata 
        image = "https://static-exp1.licdn.com/aero-v1/sc/h/ann24vsq7r0ux3vipqa1n90gg"
        title = "Stay up to date on your industry"
        description = "From live videos, to stories, to newsletters and more, LinkedIn is full of ways to stay up to date on the latest discussions in your industry."
       />

</div>
     </div>
     </div>
      
      
      
      
        
  

  )
}

export default Testimonals