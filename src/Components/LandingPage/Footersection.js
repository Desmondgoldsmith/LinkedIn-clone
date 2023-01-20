import React from 'react'
// import './footersection.css'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

function Footersection(){
    return (
        <div className="footer-section bg-white flex">
         <div className = "left_ flex space-x-1">
          <img className='w-[100px] ' src = 'https://logosvector.net/wp-content/uploads/2015/09/linkedin-black-logo.png'/>
         <p>© 2022</p>
         <p><a href = "#">About</a></p>
         <p><a href = "#">Accessibility</a> </p>
        <p><a href = "#">User Agreement</a> </p>
        <p><a href = "#">Privacy Policy</a></p>
        <p><a href = "#">Cookie Policy</a></p>
         </div>
         <div className="right flex">
        <p><a href = "#">Copyright Policy</a></p>
        <p><a href = "#">Brand Policy</a></p>
        <p><a href = "#">Guest Controls</a></p>
        <p><a href = "#">Community Guidelines</a></p>
        <p className = "down">Languages <KeyboardArrowDownIcon/></p>
         </div>
        </div>
    )
}

export default Footersection
