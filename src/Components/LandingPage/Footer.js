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
        <li><a>Sign Up</a></li>
        <li><a>Help Center</a></li>
        <li><a>About</a></li>
        <li><a>Press</a></li>
        <li><a>Blog</a></li>
        <li><a>Careers</a></li>
        <li><a>Developers</a></li>
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