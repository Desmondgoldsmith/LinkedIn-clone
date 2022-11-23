import React from 'react'
import './Maincontent.css'
import ReceiptLongIcon from '@mui/icons-material/ReceiptLong';
import DesktopMacIcon from '@mui/icons-material/DesktopMac';
import GroupsIcon from '@mui/icons-material/Groups';
import Postreactions from './Postreactions';
import Options from './Options';
import DB from '../firebase_config';
import firebase from 'firebase/compat/app'
import { useState,useEffect } from 'react';



function Maincontent() {
  const [post,setPost] = useState([])//creates a state to hold input values from textbox
  // fetching data from our collection in firebase and 
  // setting it to our Posts array and displaying it eventually when the form loads 
  useEffect(()=>{
    DB.collection('Posts').orderBy('timestamp','desc').onSnapshot(snapshot => {
     setPost(snapshot.docs.map((doc => doc.data().todo)))
    })
 },[])

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
      <h5>Recents</h5>
      <p><DesktopMacIcon/><a href = "#">Make an App worth $1,000...</a></p>
      <p><GroupsIcon/><a href = "#">Leadership Think Tank</a></p>
      <p><GroupsIcon/><a href = "#">African intelligence , Deep...</a></p>
      <p><GroupsIcon/><a href = "#">African Banking, Network-Fi...</a></p>
      <p><GroupsIcon/><a href = "#">Ghana Professional Netwo...</a></p>

      <h5><span className = "groups">Groups</span></h5>
      <p><GroupsIcon/><a href = "#">Leadership Think Tank</a></p>
      <p><GroupsIcon/><a href = "#">African intelligence , Deep...</a></p>
      <p><GroupsIcon/><a href = "#">Ghana Professional Netwo...</a></p>
      <p><GroupsIcon/><a href = "#">Python Developers Commu...</a></p>
      <p><GroupsIcon/><a href = "#">UX Design</a></p>
      <p><a href = "#">view all</a></p>
     <hr className='hr'/>
       <h4 className = "line">Discover</h4>
       </div>
        
    </div>


    <div className = 'center_content'>
       <div className = "head_content">
       <img src = "https://media-exp1.licdn.com/dms/image/C4D03AQEHVf4AElfMgg/profile-displayphoto-shrink_200_200/0/1614036542904?e=1673481600&v=beta&t=WP0DfeTq4YdzmsnOyL0JoBRNZt5WKYHP1s9DpYDXboY" alt = "profile_image"/>
       <form>
        <input type="text" name = "name" placeholder = "start a post" />
        <button submit = "submit">post</button>
       </form>
       </div>
       <Options name1 = "Photo" name2 = "Video" name3 = "Job" name4 = "Write article" />
     
      <div className = 'post_container'>
       <div className = "post_header">
       <div className = "left_division">
          <img src = "https://media-exp1.licdn.com/dms/image/C4D03AQEHVf4AElfMgg/profile-displayphoto-shrink_200_200/0/1614036542904?e=1673481600&v=beta&t=WP0DfeTq4YdzmsnOyL0JoBRNZt5WKYHP1s9DpYDXboY" alt = "profile_image"/>
       </div>
       <div className = 'right_division'>
        <h3>Desmond Goldsmith</h3>
        <p>C# || Laravel || React.JS || React Native</p>
       </div>
       </div>
       <div className='post_text'>
        <p>some text goes here and youll see it on the main page when someone posts.... It dosnt overflow its container like i taught</p>
       </div>
       <div className='post_img'>
       <img src='https://raw.githubusercontent.com/Desmondgoldsmith/LinkedIn-clone/main/public/Screenshot%202022-10-31%20at%2003.45.45.png' alt='post'/>
       </div>
       <div className='reactions'>
        <div className='left_reaction'>
         <img src = 'https://static-exp1.licdn.com/sc/h/8ekq8gho1ruaf8i7f86vd1ftt' alt='like'/>
         <p>You liked this.</p>
        </div>
        <div className = 'right_reaction'>
         <p>0 comment</p>
        </div>
       </div>
       
       <hr/>
       
       <div className = 'emoticons'>
       <Postreactions  name1 = "Like" name2 = "Comment" name3 = "Repost" name4 = "Send"/>
       </div>
     </div>
     </div>

    


    <div className = 'right_content'>
    <div className = 'right_first'>
     <img src ='https://raw.githubusercontent.com/Desmondgoldsmith/LinkedIn-clone/main/public/linkedin_pro.png' alt = 'pro'/>
    </div>
    <div className = 'right_second'>
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
      <p><img src = 'https://www.logo.wine/a/logo/LinkedIn/LinkedIn-Logo.wine.svg' alt = 'logo'/>LinkenIn corporation © 2022</p>
    </div>
    </div>
    </div>
    
    
    </div>
  )
}

export default Maincontent