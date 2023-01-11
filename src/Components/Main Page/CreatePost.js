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

function CreatePost() {
    const [text,setText] = useState('')
    const [showPicker, setShowPicker] = useState(false);
//  show emoji in textbox
  const onEmojiClick = (event, emojiObject) => {
    setText(prevInput => prevInput + emojiObject.emoji);
    setShowPicker(false);
  };

    const savePost = (e) =>{

    }

    // function handleOnEnter (text) {
    //     console.log('enter', text)
    // }

  return (
    <div className = "wrapper fixed top-0 left-0 right-0 z-50  w-[100%] h-full justify-start ">
       <div className='container bg-white w-[40%] mt-[40px] m-auto p-[10px] rounded-[8px] relative'>
        <div className="head flex items-center space-x-96 ">
            <div className='text-[20px]'><p>Create a Post</p></div>
            <div><CloseIcon/></div>
        </div>
        <hr className='mt-3 mb-3 '/>
        <div className='flex'>
            <div>
            <img className='rounded-full w-[70px]' src = "https://media.licdn.com/dms/image/D4E03AQGwZt1JT4mh4g/profile-displayphoto-shrink_200_200/0/1673142753502?e=1678924800&v=beta&t=N-mjxLo38JjH-E9kZC9bXXLhOqTFLcSNuIw3dBc85wk" alt = "profile_image"/>
            </div>
            <div className='ml-5'>
                <p className = "text-18 font-bold">Desmond Goldsmith</p>
                <p className='-mt-[2px] text-sm rounded-[15px] text-gray-400 border border-gray-500 p-1 w-[120px] cursor-pointer hover:bg-gray-200'><PublicIcon/> Anyone<ArrowDropDownIcon/> </p>
            </div>
        </div>
           {/* form  */}

           <div className='mt-[20px]'>
           <form onSubmit={(e)=>savePost(e)}>
            <textarea type="text" className='w-[99%] p-3 outline-none border-none'  value={text} onChange = {(e)=>setText(e.target.value)} name = "name" placeholder = "what do you want to talk about" />
            {/* emoji image */}
            <img
          className="emoji-icon cursor-pointer w-[20px] ml-5"
          src="https://icons.getbootstrap.com/assets/icons/emoji-smile.svg"
          onClick={() => setShowPicker(val => !val)} 
            alt = ""
          />
        {showPicker && <Picker
          pickerStyle={{ width: '80%' }}
          onEmojiClick={onEmojiClick} />}

          {/* navigations below the form */}
          <div className = "mt-[10px]">
           <ImageIcon/>
           <VideocamIcon/>
           <DescriptionIcon/>
           <WorkIcon/>
           <CelebrationIcon/>
           <PollIcon/>

          </div>
    </form>
    </div>
    
</div>
    </div>
  )
}


export default CreatePost