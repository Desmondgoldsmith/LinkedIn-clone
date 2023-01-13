import React,{useState} from 'react'
import './Maincontent.css'
import CloseIcon from '@mui/icons-material/Close';
import PublicIcon from '@mui/icons-material/Public';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import Picker from 'emoji-picker-react';
import ImageIcon from '@mui/icons-material/Image';
import VideocamIcon from '@mui/icons-material/Videocam';
import DescriptionIcon from '@mui/icons-material/Description';
import WorkIcon from '@mui/icons-material/Work';
import CelebrationIcon from '@mui/icons-material/Celebration';
import PollIcon from '@mui/icons-material/Poll';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import MessageIcon from '@mui/icons-material/Message';
import { v4 } from "uuid";
import toast from 'react-hot-toast';
import DB from '../../firebase_config.js';
import firebase from 'firebase/compat/app'
import {
  ref,
  uploadBytes,
  getDownloadURL,
  listAll,
  list,
} from "firebase/storage";
import storage  from "../../firebase2";

function CreatePost({formx,setForm}) {
    const [text,setText] = useState('')
    const [showPicker, setShowPicker] = useState(false);
    const [postImage, setpostImage] = useState(null);
    const [imageList, setImageList] = useState('');
    const [imageName, setImageName] = useState("");


    //  show emoji in textbox
  const onEmojiClick = (event, emojiObject) => {
    setText(prevInput => prevInput + emojiObject.emoji);
    setShowPicker(false);
  };
  
    const savePost = (e) =>{
      e.preventDefault();
    const imageRef = ref(storage, `images/${postImage.name + v4()}`);
    uploadBytes(imageRef, postImage).then((snapshot) => {
      getDownloadURL(snapshot.ref).then((url) => {
        setImageName((prev) => [...prev, url]);
      });
    });

    // basically adding data to our collection in firebase.
    DB.collection('Posts').add({
      post: text,
      image: `images/${postImage.name + v4()}`,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })
    toast.success('Post added successfully !!!!!')
    setText('')
    closeForm()
    }

  

    // close form 
    const closeForm = () =>{
        setForm(false)
    }

    // delete selected image
    const deleteImage = ()=>{
      setpostImage('')
    }

  return (
    <>
    {formx && ( 
    <div className = "wrapper fixed top-0 left-0 right-0 z-50  w-[100%] h-full justify-start ">
       <div className='container bg-white w-[40%] mt-[40px] m-auto p-[10px] rounded-[8px] relative'>
        <div className="head flex items-center space-x-96 ">
            <div className='text-[23px]'><p>Create a Post</p></div>
            <div className='hover:rounded-full hover:bg-gray-300 p-1 cursor-pointer' onClick = {()=>closeForm()}><CloseIcon/></div>
        </div>
        <hr className='mt-3 mb-3 '/>
        <div className='flex'>
            <div>
            <img className='rounded-full w-[70px]' src = "https://media.licdn.com/dms/image/D4E03AQGwZt1JT4mh4g/profile-displayphoto-shrink_200_200/0/1673142753502?e=1678924800&v=beta&t=N-mjxLo38JjH-E9kZC9bXXLhOqTFLcSNuIw3dBc85wk" alt = "profile_image"/>
            </div>
            <div className='ml-5'>
                <p className = "text-18 font-bold">Desmond Goldsmith</p>
                <p className='-mt-[1px] text-sm rounded-[15px] text-gray-400 border border-gray-500 p-1 w-[120px] cursor-pointer hover:bg-gray-200'><PublicIcon/> Anyone<ArrowDropDownIcon/> </p>
            </div>
        </div>
           {/* form  */}

           <div className='mt-[20px]'>
           <form onSubmit={(e)=>savePost(e)}>
            <textarea rows="3" type="text" className='w-[99%] p-3 outline-none border-none'  value={text} onChange = {(e)=>setText(e.target.value)} name = "name" placeholder = "what do you want to talk about ?" />
            
            {/* display emoji image so that the user clickes on it to display the emoji picker */}
            <img
          className="emoji-icon cursor-pointer w-[20px] ml-3 "
          src="https://icons.getbootstrap.com/assets/icons/emoji-smile.svg"
          onClick={() => setShowPicker(val => !val)} 
          alt = ""
          />
        {showPicker && <Picker
          pickerStyle={{ width: '80%' }}
          onEmojiClick={onEmojiClick} />}

        {/* display selected image */}
         {image ?
         <div className='p-3'>
         <div className='rounded-full bg-gray-200 hover:bg-gray-300 p-1 cursor-pointer float-right' onClick = {()=>deleteImage()}><CloseIcon/></div>
           <img src={image} alt = "selected_image" className="w-[98%] p-3 h-[300px]"/>
         
         </div>
         :

         ''
         }

          {/* navigations below the form */}
          <div className = "mt-[20px] flex text-gray-600 ml-2 cursor-pointer items-center">
           <div className = "space-x-3 border-r-2">
          {/* select image  */}
          <input type = "file" accept='image/*' id = "selectFile" 
          onChange={({target : {files}}) => {files[0] && setImageName(files[0].name)
            if(files){
               setImage(URL.createObjectURL(files[0]))
           }
          }}
           className='selectFile hidden'></input>
          {/* <button onClick = {uploadImage}> upload</button> */}
          {/* i hid the default image upload button and passes its func on to this icon to do the work */}
          <ImageIcon onClick = {()=>document.querySelector(".selectFile").click()} className='hover:bg-gray-300 hover:rounded-xl '/>
           <VideocamIcon className='hover:bg-gray-300 hover:rounded-xl '/>
           <DescriptionIcon className='hover:bg-gray-300 hover:rounded-xl '/>
           <WorkIcon className='hover:bg-gray-300 hover:rounded-xl '/>
           <CelebrationIcon className='hover:bg-gray-300 hover:rounded-xl '/>
           <PollIcon className='hover:bg-gray-300 hover:rounded-xl '/> 
           <MoreHorizIcon className='hover:bg-gray-300 hover:rounded-xl '/> 

            </div>

            <div className = "ml-2 space-x-3 flex items-center">
                <p className = "hover:rounded-[8px] mr-[60px] hover:bg-gray-200 p-2 text-[14px]"><MessageIcon/> Anyone</p>
                <button onClick={savePost} disabled = {text <=0 } className = {` ${text <=0 ? `bg-gray-100 cursor-not-allowed` : `bg-gray-400 text-white cursor-pointer`} w-[80px] rounded-[15px]  p-2 text-[14px] font-bold`} type = "submit">post</button>
            </div>
            
           
           
          </div>
    </form>
    </div>
    
</div>
    </div>
   )}
    {/* <Maincontent form = {form} setForm = {setForm}/> */}
    </>
  )
}


export default CreatePost