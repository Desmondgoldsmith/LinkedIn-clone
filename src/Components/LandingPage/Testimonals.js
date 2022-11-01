import React from 'react'
import './testimonials.css'
import Testdata from './Testdata';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';



function Testimonals() {
  return (
    <div className='Testimonials'>
      <div className = 'nav'>
       <p><ChevronLeftIcon/> previous</p>
       <p>next<ChevronRightIcon/></p>
     </div> 
     <div className = 'wrapper'>
        <Testdata 
        image = "https://static-exp1.licdn.com/aero-v1/sc/h/dbvmk0tsk0o0hd59fi64z3own"
        title = "Let the right people know you’re open to work"
        description = "With the Open To Work feature, you can privately tell recruiters or publicly share with the LinkedIn community that you are looking for new job opportunities."
       />
        <Testdata 
        image = "https://static-exp1.licdn.com/aero-v1/sc/h/dbvmk0tsk0o0hd59fi64z3own"
        title = "Let the right people know you’re open to work"
        description = "With the Open To Work feature, you can privately tell recruiters or publicly share with the LinkedIn community that you are looking for new job opportunities."
       />
     </div>
    </div>

  )
}

export default Testimonals