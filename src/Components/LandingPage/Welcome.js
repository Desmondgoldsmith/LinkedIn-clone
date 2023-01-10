import React from 'react'
import './welcome.css'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

function Welcome() {
  return (
    <div className='Welcome bg-white'>
        <div className='text_welcome'>
          <p>Welcome to your professional community</p>
          <div className='questions'>
             <p>search jobs <ArrowForwardIosIcon/></p>
          </div>
          <div className='questions'>
             <p>Find a person you know<ArrowForwardIosIcon/></p>
          </div>
          <div className='questions'>
             <p>Learn a new skill<ArrowForwardIosIcon/></p>
          </div>
        </div>

        <div className='image_welcome'>
        <img  src='https://static-exp1.licdn.com/aero-v1/sc/h/dxf91zhqd2z6b0bwg85ktm5s4' alt = 'welcome'/>
        </div>
    </div>
  )
}

export default Welcome