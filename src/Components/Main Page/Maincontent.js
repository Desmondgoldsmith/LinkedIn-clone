import React from 'react'
import './Maincontent.css'
import ReceiptLongIcon from '@mui/icons-material/ReceiptLong';

function Maincontent() {
  return (
    <div className = 'Main_content'>

    <div className = 'left_content'>
     <div className = 'left_first'>
        <div className = 'backgroundImage' style = {{
        backgroundImage : `url("https://media-exp1.licdn.com/dms/image/C4E16AQHAvKyuZ98BlQ/profile-displaybackgroundimage-shrink_350_1400/0/1662081045859?e=1673481600&v=beta&t=Bi_sMf1kHknAJ8m8oFPHQ414RwDV51_bMjWmsZkr0FU")`,
        backgroundSize : 'cover',
        backgroundRepeat : 'no-repeat',
    }}>
       <img src = "https://media-exp1.licdn.com/dms/image/C4D03AQEHVf4AElfMgg/profile-displayphoto-shrink_200_200/0/1614036542904?e=1673481600&v=beta&t=WP0DfeTq4YdzmsnOyL0JoBRNZt5WKYHP1s9DpYDXboY" alt = "profile_image"/>
       </div>

       <div className = 'profile_name'>
        <h3>Desmond Goldsmith</h3>
        <p>C# || Laravel || React.JS || React Native</p>
        <hr/>
       </div>

       <div className = 'reactions_'>
        <h5>Who's Viewed your profile <span className='count'>500</span></h5>
        <h5>Impressions on post <span className='count_'>1,200</span></h5>
       </div>
       <hr/>
       <div className = 'premium'>
        <p className='premium_note'>Access exclusive tools and insights</p>
        <p className='premium_link'><a href = "#">Try premium for free</a></p>
       </div>
       <hr/>
       <div className = 'wishlist'>
        <p><ReceiptLongIcon/>My items</p>
       </div>
     </div>

     <div className = 'left_second'>
      <h1>I'm Wealth !</h1>
     </div>
    
    </div>


    <div className = 'center_content'>
    <h2>I'm in the center</h2>

    </div>
    <div className = 'right_content'>
    <img src ='https://raw.githubusercontent.com/Desmondgoldsmith/LinkedIn-clone/main/public/linkedin_pro.png' alt = 'pro'/>
    <div className = 'footer_details'>
      <ul>
        <li><a href = "#">About</a></li>
        <li><a href = "#">Accessibility</a></li>
        <li><a href = "#">Help Center</a></li>
        <li><a href = "#">Privacy and Terms</a></li>
        <li><a href = "#">Add Choices</a></li>
        <li><a href = "#">Advertising</a></li>
        <li><a href = "#">Business Services</a></li>
        <li><a href = "#">Get the LinkedIn app</a></li>
        <li><a href = "#">More</a></li>
      </ul>
      <p><img src = '' alt = ''/>LinkenIn corporation © 2022</p>
    </div>
    </div>
    
    </div>
  )
}

export default Maincontent