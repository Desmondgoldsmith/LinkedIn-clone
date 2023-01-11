import React,{useState} from 'react'
import './Maincontent.css'
import CloseIcon from '@mui/icons-material/Close';
import PublicIcon from '@mui/icons-material/Public';

function CreatePost() {
    const [text,setText] = useState('')
    
    const savePost = (e) =>{

    }

  return (
    <div className = "wrapper fixed top-0 left-0 right-0 z-50  w-[100%] h-full justify-start ">
       <div className='container bg-white w-[40%] mt-[40px] h-60  m-auto p-[10px] rounded-[8px] relative'>
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
                <p><PublicIcon/> Anyone </p>
            </div>
        </div>

          
       </div>
    </div>
  )
}


export default CreatePost