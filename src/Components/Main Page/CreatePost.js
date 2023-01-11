import React,{useState} from 'react'
import CloseIcon from '@mui/icons-material/Close';

function CreatePost() {
    const [text,setText] = useState('')
    
    const savePost = (e) =>{

    }

  return (
    <div className = "wrapper fixed top-0 left-0 right-0 z-60 bg-[rgba(0, 0, 0, 0.5)] w-[100%] h-full items-center flex ">
       <div className='container bg-white w-[90%] max-[500px] m-auto flex justify-center items-center p-[2rem] rounded-[8px] relative'>
        <div className="head">
            <p>Create a Post</p>
             <CloseIcon/>
        </div>
       </div>
    </div>
  )
}


export default CreatePost