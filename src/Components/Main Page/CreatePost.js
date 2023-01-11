import React,{useState} from 'react'
import CloseIcon from '@mui/icons-material/Close';

function CreatePost() {
    const [text,setText] = useState('')
    
    const savePost = (e) =>{

    }

  return (
    <div className = "wrapper">
       <div className='container'>
        <div className="head">
            <p>Create a Post</p>
             <CloseIcon/>
        </div>
       </div>
    </div>
  )
}


export default CreatePost