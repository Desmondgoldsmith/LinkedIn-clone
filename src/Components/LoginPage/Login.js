import React,{useState,useEffect, useLayoutEffect} from 'react'
import Footersection from '../LandingPage/Footersection'

function Login() {
    const [name,setName] = useState("")
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const [image,setImage] = useState("")



  const registerUser = (e) => {
      e.preventDefault() 
  }

   useLayoutEffect(() => {
        return () => {
         document.body.style.backgroundColor = "rgb(240,239,235)"
        }
      });
      
      return (
   
 <div>
      <div className = "p-1 ml-[150px]">
        {/* logo */}
        <img className='w-[150px]' src = "https://www.logo.wine/a/logo/LinkedIn/LinkedIn-Logo.wine.svg" alt = "logo"/>
      </div>


      <div className="text-center">
        <p className='text-[30px] '>Make the most of your professional life</p>
      </div>

      <div className='bg-white mx-auto rounded-md p-3 w-[400px] mb-10'>
         <form>
         <div className='flex flex-col '>
            <lable for="username text-[12px]">username</lable>
           <input onChange={(e) => setName(e.target.value)} className = "p-1 rounded-[3px] text-[18px] border focus:outline-black border-black" placeholder='username'/>
         </div>
         <div className='flex flex-col  mt-[20px]'>
            <lable for="email text-[12px]">email</lable>
           <input type = "email" className = "p-1 rounded-[3px] text-[18px] border focus:outline-black border-black" placeholder='example@gmail.com'/>
         </div>
         <div className='flex flex-col  mt-[20px]'>
            <lable for="email text-[12px]">Password (6 or more characters)</lable>
           <input type="password" className = "p-1 rounded-[3px] text-[18px] border focus:outline-black border-black" />
         </div>
         <div className='flex flex-col space-y-2 mt-[20px]'>
            <lable for="email text-[12px]">profile image</lable>
             <input type = "file" />
         </div>

         <div className='text-center text-[12px] -space-y-2'>
            <p>By clicking Agree & Join, you agree to the LinkedIn <span className='text-blue-600 cursor-pointer '>User</span> </p>
            <p><span className='text-blue-600  cursor-pointer  '>Agreement</span>, <span className='text-blue-600  cursor-pointer '>Privacy Policy</span>, and <span className='text-blue-600 cursor-pointer '>Cookie Policy</span>.</p>
         </div>

         <button className='w-[100%] rounded-full p-4 bg-blue-600 mt-3 text-white'>Agree and Join</button>
           </form>
           <p className = "text-center text-[12px]">Already on LinkedIn? <span className='text-blue-600 font-semibold cursor-pointer hover:underline'>Sign in</span></p>
      </div>
      {/* footer */}
<Footersection/>
    </div>
  )
}

export default Login
