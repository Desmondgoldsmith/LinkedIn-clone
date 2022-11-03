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
         <li>Business Solutions</li>
        <li>Talent</li>
        <li>Marketing</li>
        <li>Sales</li>
        <li>Learning</li>
      </ul>
      </div>
      <div className='Directories'>
      <ul>
     <li>Directories</li> 
    <li>Members</li>
    <li>Jobs</li>
    <li>Companies</li>
    <li>Featured</li>
    <li>Learning</li>
    <li>Posts</li>
    <li>Articles</li>
    <li>Schools</li>
    <li>News</li>
    <li>News Letters</li>
    <li>Services</li>
    <li>Products</li>
    <li>Content Topics</li>
      </ul>

      </div>
    </div>
  )
}

export default Footer