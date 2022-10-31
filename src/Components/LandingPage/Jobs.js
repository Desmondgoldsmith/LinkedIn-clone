import React from 'react'
import './jobs.css'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

function Jobs() {
  return (
    <div className = 'Jobs'>
      <div className ='title'>
      <h2>Find the right job or internship for you</h2>
      </div>
     <div className = 'jobs_types'>
      <p className='header'>SUGGESTED SEARCHES</p>
      <button>Engineering</button>
      <button>Business Development</button>
      <button>Finance</button>
      <button>Administrative Assistant</button>
      <button>Research Associate</button>
      <button>Retail Associate</button>
      <button>Customer Services</button>
      <button>Operations</button>
      <button>Information Technology</button>
      <button>Marketing</button>
      <button>Human Resource</button>
      <p>show more <KeyboardArrowDownIcon/> </p>
    </div>
    </div>
  )
}

export default Jobs