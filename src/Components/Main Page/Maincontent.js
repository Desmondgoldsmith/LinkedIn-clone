import React from 'react'
import './Maincontent.css'
import ReceiptLongIcon from '@mui/icons-material/ReceiptLong';
import DesktopMacIcon from '@mui/icons-material/DesktopMac';
import GroupsIcon from '@mui/icons-material/Groups';
import Options from './Options';
import DB from '../../firebase_config.js';
import firebase from 'firebase/compat/app'
import { useState,useEffect,useLayoutEffect } from 'react';
import toast from 'react-hot-toast';
import Addpost from './Addpost';
import CreatePost from './CreatePost';



function Maincontent() {
  const [posts,setPosts] = useState([])//creates a state to hold input values from textbox
  const [text,setText] = useState('')//creates a state to hold input values from textbox
  const [postImage,setPostImage] = useState('https://raw.githubusercontent.com/Desmondgoldsmith/LinkedIn-clone/main/public/Screenshot%202022-10-31%20at%2003.45.45.png')//creates a state to hold input values from textbox
  const [formx,setForm] = useState(false)

  // fetching data from our collection in firebase and 
  // setting it to our Posts array and displaying it eventually when the form loads 
  useEffect(()=>{
    DB.collection('Posts').orderBy('timestamp','desc').onSnapshot(snapshot => {
    //  console.log(snapshot.docs.map((doc => ({data:doc.data(),id:doc.id}))))
     setPosts(snapshot.docs.map((doc => ({data:doc.data()}))))
    })
 },[])

//  setting a background color on page load
 useLayoutEffect(() => {
   return () => {
    document.body.style.backgroundColor = "rgb(240,239,235)"
   }
 });
 

 const savePost = (e) => {
  e.preventDefault(); //prevent browser from auto refresh
  // basically adding data to our collection in firebase.
  DB.collection('Posts').add({
    post: text,
    image: postImage,
    timestamp: firebase.firestore.FieldValue.serverTimestamp()
  })
  toast.success('Post added successfully !!!!!')
  setText('')
  
}

// display form when textbox is focused on 
const displayForm = (e) => {
  setForm(true)
}

  return (
    <>
   <CreatePost formx = {formx} setForm = {setForm}/>
    <div className = 'Main_content bg-[rgb(240,239,235)]'>

    <div className = 'left_content '>
     <div className = 'left_first sticky top-[2rem]'>
        <div className = 'backgroundImage' style = {{
        backgroundImage : `url("https://media-exp1.licdn.com/dms/image/C4E16AQHAvKyuZ98BlQ/profile-displaybackgroundimage-shrink_350_1400/0/1662081045859?e=1673481600&v=beta&t=Bi_sMf1kHknAJ8m8oFPHQ414RwDV51_bMjWmsZkr0FU")`,
        backgroundSize : 'cover',
        backgroundRepeat : 'no-repeat',
    }}>
       <img src = "https://media.licdn.com/dms/image/D4E03AQGwZt1JT4mh4g/profile-displayphoto-shrink_200_200/0/1673142753502?e=1678924800&v=beta&t=N-mjxLo38JjH-E9kZC9bXXLhOqTFLcSNuIw3dBc85wk" alt = "profile_image"/>
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
        <p className='premium_link'><a href = "/#">Try premium for free</a></p>
       </div>
       <hr/>
       <div className = 'wishlist'>
        <p><ReceiptLongIcon/>My items</p>
       </div>
     </div>

     <div className = 'left_second sticky'>
      <h5>Recents</h5>
      <p><DesktopMacIcon/><a href = "/#">Make an App worth $1,000...</a></p>
      <p><GroupsIcon/><a href = "/#">Leadership Think Tank</a></p>
      <p><GroupsIcon/><a href = "/#">African intelligence , Deep...</a></p>
      <p><GroupsIcon/><a href = "/#">African Banking, Network-Fi...</a></p>
      <p><GroupsIcon/><a href = "/#">Ghana Professional Netwo...</a></p>

      <h5><span className = "groups">Groups</span></h5>
      <p><GroupsIcon/><a href = "/#">Leadership Think Tank</a></p>
      <p><GroupsIcon/><a href = "/#">African intelligence , Deep...</a></p>
      <p><GroupsIcon/><a href = "/#">Ghana Professional Netwo...</a></p>
      <p><GroupsIcon/><a href = "/#">Python Developers Commu...</a></p>
      <p><GroupsIcon/><a href = "/#">UX Design</a></p>
      <p><a href = "/#">view all</a></p>
       </div>
    </div>


    <div className = 'center_content'>
       <div className = "head_content">
       <img src = "https://media.licdn.com/dms/image/D4E03AQGwZt1JT4mh4g/profile-displayphoto-shrink_200_200/0/1673142753502?e=1678924800&v=beta&t=N-mjxLo38JjH-E9kZC9bXXLhOqTFLcSNuIw3dBc85wk" alt = "profile_image"/>
       <form onSubmit={(e)=>savePost(e)}>
        <input type="text" value={text} autocomplete="off" onFocus = {(e)=>displayForm(e)} onChange = {(e)=>setText(e.target.value)} name = "name" placeholder = "start a post" />
        <button type = "submit">post</button>
       </form>
       </div>
       <Options name1 = "Photo" name2 = "Video" name3 = "Job" name4 = "Write article" />
     
      <Addpost postsImage = {postImage} posts = {posts}/>
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
      <p><img src = 'https://www.logo.wine/a/logo/LinkedIn/LinkedIn-Logo.wine.svg' alt = 'logo'/>LinkenIn corporation ?? 2022</p>
    </div>
    </div>
    </div>
    
    
    </div>

    </>
  )
}

export default Maincontent