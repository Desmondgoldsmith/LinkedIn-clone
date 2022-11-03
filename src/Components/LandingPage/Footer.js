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
         <span className='main'>General</span>
        <li><a href = '#'>Sign Up</a></li>
        <li><a href = '#'>Help Center</a></li>
        <li><a href = '#'>About</a></li>
        <li><a href = '#'>Press</a></li>
        <li><a href = '#'>Blog</a></li>
        <li><a href = '#'>Careers</a></li>
        <li><a href = '#'>Developers</a></li>
         </ul>
      </div>
      <div className='Browsed_linkedln'>
      <ul>
      <span className='main'>Browse LinkedIn</span>
        <li><a href='#'>Learning</a></li>
        <li><a href='#'>Jobs</a></li>
        <li><a href='#'>Salary</a> </li>
        <li><a href = '#'>Mobile</a> </li>
        <li><a href = '#'>Services</a></li>
       <li><a href = '#'>Products</a> </li> 
      </ul>
      </div>
      <div className='Business_solutions'>
      <ul>
      <span className='main'>Business Solutions</span>
        <li><a href = '#'>Talent</a></li>
        <li><a href = '#'>Marketing</a> </li>
        <li> <a href = '#'>Sales</a> </li>
        <li> <a href = '#'>Learning</a> </li>
      </ul>
      </div>
      <div className='Directories'>
      <ul>
      <span className='main'>Directories</span> 
    <li><a href = '#'>Members</a> </li>
    <li><a href = '#'>Jobs</a> </li>
    <li><a href = '#'>Companies</a></li>
    <li><a href = '#'>Featured</a> </li>
    <li><a href = '#'>Learning</a></li>
    <li><a href = '#'>Posts </a></li>
    <li><a href = '#'>Articles</a> </li>
    <li><a href = '#'>Schools</a></li>
    <li><a href = '#'>News</a></li>
    <li><a href = '#'>News Letters</a></li>
    <li><a href = '#'>Services</a></li>
    <li><a href = '#'>Products</a></li>
    <li><a href = '#'>Content Topics</a></li>
      </ul>

      </div>
    </div>
  )
}

export default Footer