import React from 'react'
import './footersection.css'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

function Footersection(){
    return (
        <div className="footer-section">
         <div className = "left_">
         <p className='logo'><img src = 'https://logosvector.net/wp-content/uploads/2015/09/linkedin-black-logo.png'/> © 2022</p>
         <p><a href = "#">About</a></p>
         <p><a href = "#">Accessibility</a> </p>
        <p><a href = "#">User Agreement</a> </p>
        <p><a href = "#">Privacy Policy</a></p>
        <p><a href = "#">Cookie Policy</a></p>
         </div>
         <div className="right">
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
