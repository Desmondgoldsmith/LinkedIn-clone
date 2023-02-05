import React from 'react'
import './Maincontent.css'
import ReceiptLongIcon from '@mui/icons-material/ReceiptLong';
import DesktopMacIcon from '@mui/icons-material/DesktopMac';
import GroupsIcon from '@mui/icons-material/Groups';
import Options from './Options';
import DB from '../../firebase_config.js';
// import firebase from 'firebase/compat/app'
import { useState,useEffect,useLayoutEffect } from 'react';
// import toast from 'react-hot-toast';
import Addpost from './Addpost';
import CreatePost from './CreatePost';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import PostAddIcon from '@mui/icons-material/PostAdd';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Navbar from './Navbar';
import SearchIcon from '@mui/icons-material/Search';
import TuneIcon from '@mui/icons-material/Tune';



function Maincontent() {
  const [posts,setPosts] = useState([])//creates a state to hold input values from textbox
  const [text,setText] = useState('')//creates a state to hold input values from textbox
  const [postImage,setPostImage] = useState('https://raw.githubusercontent.com/Desmondgoldsmith/LinkedIn-clone/main/public/Screenshot%202022-10-31%20at%2003.45.45.png')//creates a state to hold input values from textbox
  const [formx,setForm] = useState(false)
  const [loading,setLoading] = useState(false)
  const [showUp, setshowUp] = useState(false)
  const [isFixed, setIsFixed] = useState(false); // to set the second div on the right to fixed

  // function to set the div to be fixed when scroll > 300 else leave it alone
  const handleScroll = () => {
    if (window.scrollY >= 300 && !isFixed) {
      setIsFixed(true);
    } else if (window.scrollY < 300 && isFixed) {
      setIsFixed(false);
    }
  };

  // the code below uses the useEffect hook to listen to the window's scroll 
  // event using window.addEventListener('scroll', handleScroll). When the 
  // component unmounts, it will remove the scroll event listener using 
  // window.removeEventListener('scroll', handleScroll) in the cleanup function.

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isFixed]);

  //fetching data from our collection in firebase and 
  // setting it to our Posts array and displaying it eventually when the form loads 
  useEffect(()=>{
    setLoading(true)
    DB.collection('Posts').orderBy('timestamp','desc').onSnapshot(snapshot => {
    //  console.log(snapshot.docs.map((doc => ({data:doc.data(),id:doc.id}))))
     setPosts(snapshot.docs.map((doc => ({data:doc.data()}))))
     setLoading(false)

     console.log(setPosts)
    })
 },[])

//  setting a background color on page load
 useLayoutEffect(() => {
   return () => {
    document.body.style.backgroundColor = "rgb(240,239,235)"
   }
 });
 

//  const savePost = (e) => {
//   e.preventDefault(); //prevent browser from auto refresh
//   // basically adding data to our collection in firebase.
//   DB.collection('Posts').add({
//     post: text,
//     image: postImage,
//     timestamp: firebase.firestore.FieldValue.serverTimestamp()
//   })
//   toast.success('Post added successfully !!!!!')
//   setText('')
  
// }

// display form when textbox is focused on 
const displayForm = (e) => {
  setForm(true)
}

// show the messages pane on clicking it or hide it if already showing
const rollup = () =>{
  if(showUp === true){
    setshowUp(false) 
  }else{
    setshowUp(true) 

  }
}


  return (
    <>
    <Navbar showUp = {showUp} setshowUp = {setshowUp} />
   <CreatePost formx = {formx} setForm = {setForm}/>
   
   {/* message section */}
   <div  className ={`${showUp ? `top-[350px]` : ` top-[738px]`} w-[300px] cursor-pointer p-[2px]  bg-white z-50 fixed bottom-0  right-0 h-[50px]  rounded-tl-md`}>
     <div onClick = {(e)=>rollup()} className = "flex justify-between items-center p-1">
     <div onClick = {(e)=>rollup()} className='flex space-x-3'>
       <img className='rounded-full w-10' src = "https://media.licdn.com/dms/image/D4E03AQGwZt1JT4mh4g/profile-displayphoto-shrink_200_200/0/1673142753502?e=1678924800&v=beta&t=N-mjxLo38JjH-E9kZC9bXXLhOqTFLcSNuIw3dBc85wk" alt = "profile_image"/>
       <p onClick = {(e)=>rollup()} className = "text-[14px] font-bold">Messaging</p>
     </div>

     <div onClick = {(e)=>rollup()} className = "flex space-x-3">
      <MoreHorizIcon/>
      <PostAddIcon/>
      {showUp ? <ExpandMoreIcon/> : <KeyboardArrowUpIcon/>}
     </div>
    
     </div>
     {/* content */}
     <div className = {`${rollup ? `h-[400px]` : `top-1`}  bg-white  mt-[2px] w-[850px] `}>
      <hr className = "-mt-1"/>
      {/* search */}
      <div className='pl-2 pr-2 pt-1 pb-1'>
          <div className = "bg-gray-200 w-[280px] mt-3 rounded-[9px] p-1">
        <SearchIcon/>
        <input type = "text" placeholder='search' className='bg-gray-200 w-[220px] outline-none text-[14px] p-1'/>
      <TuneIcon/>
      </div>
      </div>
    

    {/* actual messages  */}
    <div className = "mt-2 flex hover:bg-gray-200 p-2 cursor-pointer">
      <div><img className='rounded-full w-12 ' src = "https://media.istockphoto.com/id/576892238/de/foto/portr%C3%A4t-einer-sch%C3%B6nen-frau-suchen.jpg?s=612x612&w=0&k=20&c=RFgCjls2Y8atcqr06UZHvIqV79N-wz9sg-irAH7l_8I=" alt = "profile_image"/></div>
      <div>
      <div className='flex justify-between space-x-[80px] items-center'>
      <p className = "font-bold text-[14px] -mt-3 ml-2">Jessica Brown</p>
      <p className='font-bold text-[12px]'>Feb 12</p>
      </div>
      <p className='flex-col -mt-2 text-[12px] ml-2'>How are you doing ?</p>
      <hr/>
      </div>
    </div>

    <div className = "mt-2 flex hover:bg-gray-200 p-2 cursor-pointer">
      <div><img className='rounded-full w-12' src = "https://media.istockphoto.com/id/882495390/de/foto/gl%C3%BCck.jpg?s=612x612&w=0&k=20&c=v3g2p4gTEhZP2vVRr6IEGe10nHgcTFACCWIH9UCC_80=" alt = "profile_image"/></div>
      <div>
      <div className='flex justify-between space-x-[110px] items-center'>
      <p className = "font-bold text-[14px] -mt-3 ml-2">Alice Gold</p>
      <p className='font-bold text-[12px]'>Jan 09</p>
      </div>
      <p className='flex-col -mt-2 text-[12px] ml-2'>How are you doing ?</p>
      <hr/>
      </div>
    </div>



    <div className = "mt-2 flex hover:bg-gray-200 p-2 cursor-pointer">
      <div><img className='rounded-full w-12' src = "https://media.licdn.com/dms/image/D4E03AQGwZt1JT4mh4g/profile-displayphoto-shrink_200_200/0/1673142753502?e=1678924800&v=beta&t=N-mjxLo38JjH-E9kZC9bXXLhOqTFLcSNuIw3dBc85wk" alt = "profile_image"/></div>
      <div>
      <div className='flex justify-between space-x-[80px] items-center'>
      <p className = "font-bold text-[14px] -mt-3 ml-2">Peter Schmidt</p>
      <p className='font-bold text-[12px]'>Dec 08</p>
      </div>
      <p className='flex-col -mt-2 text-[12px] ml-2'>How are you doing ?</p>
      <hr/>
      </div>
    </div>




    <div className = "mt-2 flex hover:bg-gray-200 p-2 cursor-pointer">
      <div><img className='rounded-full w-12' src = "https://media.istockphoto.com/id/1132792394/de/foto/kopfschuss-eines-jungen-erwachsenen.jpg?s=612x612&w=0&k=20&c=Y5UhjBOrd3tM9-W6OESG-TH2j07NrS51YXEXDRg8Adk=" alt = "profile_image"/></div>
      <div>
      <div className='flex justify-between space-x-[80px] items-center'>
      <p className = "font-bold text-[14px] ml-2">Samuel Doe X</p>
      <p className='font-bold text-[12px]'>Nov 01</p>
      </div>
      <p className='flex-col -mt-2 text-[12px] ml-2'>How are you doing ?</p>
      <hr/>
      </div>
    </div>
    {/* actual message ends here */}

     </div>
    </div>

    <div className = 'Main_content bg-[rgb(240,239,235)]'>
    <div className = 'left_content '>
     <div className = 'left_first'>
        <div className = 'backgroundImage' style = {{
        backgroundImage : `url("https://media.licdn.com/dms/image/C4E16AQHAvKyuZ98BlQ/profile-displaybackgroundimage-shrink_350_1400/0/1662081045859?e=1678924800&v=beta&t=mdJpRY4oKw6sN6h3iPxv49qpMsf-YuKVXQ5obr-MsGU")`,
        backgroundSize : 'cover',
        backgroundRepeat : 'no-repeat',
    }}>
       <img src = "https://media.licdn.com/dms/image/D4E03AQGwZt1JT4mh4g/profile-displayphoto-shrink_200_200/0/1673142753502?e=1678924800&v=beta&t=N-mjxLo38JjH-E9kZC9bXXLhOqTFLcSNuIw3dBc85wk" alt = "profile_image"/>
       </div>

       <div className = 'profile_name'>
        <h3>Desmond Goldsmith</h3>
        <p className = "-mt-[9px] text-[12px] text-gray-500 p-2">C# || Laravel || React.JS || React Native</p>
        <hr/>
       </div>

       <div className = 'reactions_ text-[rgb(101,101,101)] text-[13px]'>
        <h5 className = 'hover:bg-gray-200 cursor-pointer p-1 pl-3 '>Who's Viewed your profile <span className='count text-[rgb(18,80,181)] ml-3' >500</span></h5>
        <h5 className = 'hover:bg-gray-200 cursor-pointer p-1 -mt-[9px] pl-3'>Impressions on post <span className='count_ text-[rgb(18,80,181)] ml-[45px]'>1,200</span></h5>
       </div>
       <hr/>
       <div className = 'premium'>
        <p className='premium_note'>Access exclusive tools and insights</p>
        <p className='premium_link -mt-[10px]'><a href = "/#">Try premium for free</a></p>
       </div>
       <hr/>
       <div className = 'wishlist p-1'>
        <p className = "text-[13px] ml-1"><ReceiptLongIcon/>My items</p>
       </div>
     </div>

     <div className = {`left_second w-[240px]  ${isFixed ? `fixed top-[70px] ` : ''}`} >
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

{/* center */}
    <div className = 'center_content '>
       <div className = "head_content">
       <img src = "https://media.licdn.com/dms/image/D4E03AQGwZt1JT4mh4g/profile-displayphoto-shrink_200_200/0/1673142753502?e=1678924800&v=beta&t=N-mjxLo38JjH-E9kZC9bXXLhOqTFLcSNuIw3dBc85wk" alt = "profile_image"/>
       <form className = "hover:bg-gray-200 cursor-pointer">
        <input type="text" className = "hover:bg-gray-200 cursor-pointer" value={text} autoComplete="off" onFocus = {(e)=>displayForm(e)} onChange = {(e)=>setText(e.target.value)} name = "name" placeholder = "start a post" />
        <button type = "submit " className = "hover:bg-gray-200">post</button>
       </form>
       </div>
       <Options formx = {formx} setForm = {setForm} name1 = "Photo" name2 = "Video" name3 = "Job" name4 = "Write article" />
      <Addpost loading = {loading} setLoading = {setLoading} postsImage = {postImage} posts = {posts}/>
     </div>

    


    <div className = 'right_content '>
    <div className = 'right_first fixed top-20'>
     <img src ='https://raw.githubusercontent.com/Desmondgoldsmith/LinkedIn-clone/main/public/linkedin_pro.png' alt = 'pro'/>
    </div>
    <div className = 'right_second  fixed top-[330px]'>
    <div className = 'footer_details'>
      <ul className = "p-2 borde w-[300px]">
        <li><a href = "/#">About</a></li>
        <li><a href = "/#">Accessibility</a></li>
        <li><a href = "/#">Help Center</a></li>
        <li><a href = "/#">Privacy and Terms</a></li>
        <li><a href = "/#">Add Choices</a></li>
        <li><a href = "/#">Advertising</a></li>
        <li><a href = "/#">Business Services</a></li>
        <li><a href = "/#">Get the LinkedIn app</a></li>
        <li><a href = "/#">More</a></li>
      </ul>
      <p className = "font-[12px] w-[280px]"><img src = 'https://www.logo.wine/a/logo/LinkedIn/LinkedIn-Logo.wine.svg' alt = 'logo'/>Desmond Goldsmith 🙂 © 2023</p>
    </div>

    
    </div>

    </div>

    
    
    </div>

    </>
  )
}

export default Maincontent