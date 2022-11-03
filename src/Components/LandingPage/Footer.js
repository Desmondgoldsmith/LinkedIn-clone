import React from 'react'
import './footer.css'

function Footer() {
  return (
    <div className='Footer'>
      <div className='linkedln_logo'>
         <img src ='https://www.logo.wine/a/logo/LinkedIn/LinkedIn-Logo.wine.svg' alt = 'linkedin'/>
      </div>
      <div className='general'>
         <ul>
         <li>General</li>
        <li>Sign Up</li>
        <li>Help Center</li>
        <li>About</li>
        <li>Press</li>
        <li>Blog</li>
        <li>Careers</li>
        <li>Developers</li>
         </ul>
      </div>
      <div className='Browsed_linkedln'>
      <ul>
      <li>Browse LinkedIn</li>
        <li>Learning</li>
        <li>Jobs</li>
        <li>Salary</li>
        <li>Mobile</li>
        <li>Services</li>
       <li>Products</li> 
      </ul>
      </div>
      <div className='Business_solutions'>
      </div>
      <div className='Directories'>
      </div>
    </div>
  )
}

export default Footer