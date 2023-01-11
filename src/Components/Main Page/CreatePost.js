import React,{useState} from 'react'

function CreatePost() {
    const [text,setText] = useState('')
    
    const savePost = (e) =>{

    }

  return (
    <div className = "wrapper">
       <div className='container'>
        <div className="head">
            <p>Create a Post</p>
            
        </div>
       </div>
    </div>
  )
}


export default CreatePost