import React from 'react'
import './footersection.css'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

function Footersection(){
    return (
        <div className="footer-section">
         <ul>
         <li><img src = 'https://logosvector.net/wp-content/uploads/2015/09/linkedin-black-logo.png'/></li>
         <li>© 2022</li>
         <li><a href = "#">About</a></li>
         <li><a href = "#">Accessibility</a> </li>
        <li><a href = "#">User Agreement</a> </li>
        <li><a href = "#">Privacy Policy</a></li>
        <li><a href = "#">Cookie Policy</a></li>
        <li><a href = "#">Copyright Policy</a></li>
        <li><a href = "#">Brand Policy</a></li>
        <li><a href = "#">Guest Controls</a></li>
        <li><a href = "#">Community Guidelines</a></li>
        <li className = "down">Languages <KeyboardArrowDownIcon/></li>
         </ul>
        </div>
    )
}

export default Footersection
