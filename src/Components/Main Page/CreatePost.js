import React,{useState} from 'react'
import './Maincontent.css'
import CloseIcon from '@mui/icons-material/Close';

function CreatePost() {
    const [text,setText] = useState('')
    
    const savePost = (e) =>{

    }

  return (
    <div className = "wrapper fixed top-0 left-0 right-0 z-50  w-[100%] h-full justify-start ">
       <div className='container bg-white w-[35%] mt-[40px]  m-auto flex  p-[2rem] rounded-[8px] relative'>
        <div className="head">
            <p>Create a Post</p>
             <CloseIcon/>
        </div>
        <hr className='mt-3 mb-3 '/>
          
       </div>
    </div>
  )
}


export default CreatePost