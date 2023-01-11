import React,{useState} from 'react'

function CreatePost() {
    const [text,setText] = useState('')
    
    const savePost = (e) =>{

    }

  return (
    <div className = "wrapper">
       <div className='container'>
       <form onSubmit={(e)=>savePost(e)}>
        <textarea type="text" value={text} onChange = {(e)=>setText(e.target.value)} name = "name" placeholder = "start a post" />
        <button type = "submit">post</button>
       </form>
       </div>
    </div>
  )
}


export default CreatePost