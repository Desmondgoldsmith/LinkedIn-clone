import React,{useState} from 'react'
import './Maincontent.css'
import CloseIcon from '@mui/icons-material/Close';

function CreatePost() {
    const [text,setText] = useState('')
    
    const savePost = (e) =>{

    }

  return (
    <div className = "wrapper fixed top-0 left-0 right-0 z-50  w-[100%] h-full justify-start ">
       <div className='container bg-white w-[40%] mt-[40px]  m-auto flex  p-[10px] rounded-[8px] relative'>
        <div className="head flex items-center space-x-96">
            <div className='text-[20px]'><p>Create a Post</p></div>
            <div><CloseIcon/></div>
        </div>
        <hr className='mt-3 mb-3 '/>

        
          
       </div>
    </div>
  )
}


export default CreatePost