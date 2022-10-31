import React from 'react'
import './topics.css'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import Careerdetails from './Careerdetails';

function Topics() {
  return (
    <div className='Topics'>
     <div className='topics_container'>
        <p className='main'>Explore topics you are interested in</p>
     <p className='second'>CONTENT TOPICS</p>
     <div className='buttons'>
        <button className='var_topics'>see All Topics</button>
     <button className='var_topics'>Workplace</button>
     <button className='var_topics'>Job Search</button>
     <button className='var_topics'>Careers</button>
     <button className='var_topics'>Interviewing</button>
     <button className='var_topics'>Salary and Compensation</button>
     <button className='var_topics'>Internships</button>
     <button className='var_topics'>Employee Benefits</button>
     </div>

     <div className='career_advice'>
        <div className='det'>
            <p>CAREER ADVICE ON LINKEDIN</p>
            <p className='see_all'>see all  <ArrowBackIosNewIcon/><ArrowForwardIosIcon/></p>
        </div>
        <Careerdetails 
            image  = "https://raw.githubusercontent.com/Desmondgoldsmith/LinkedIn-clone/main/public/Screenshot%202022-10-31%20at%2003.46.01.png" 
            title = " What to know about applicant tracking systems ?" 
            logo = "https://raw.githubusercontent.com/Desmondgoldsmith/LinkedIn-clone/main/public/1650462277550.jpeg"
            subtitle = "Get hired by linkedIn news."
            details = "Application tracking systems (ATS) are databases that tracks ...."
        />
     </div>
     </div>
     </div>
  )
}

export default Topics