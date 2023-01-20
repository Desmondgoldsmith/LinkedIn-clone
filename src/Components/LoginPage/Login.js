import React,{useState,useEffect, useLayoutEffect} from 'react'

function Login() {
   useLayoutEffect(() => {
        return () => {
         document.body.style.backgroundColor = "rgb(240,239,235)"
        }
      });
      
      return (
   
 <div>
      <div className = "p-4 ml-[150px]">
        {/* logo */}
        <img className='w-12' src = "https://www.seekpng.com/png/full/8-84419_linkedin-logo-png-icon-linkedin-logo-png.png" alt = "logo"/>
      </div>

      <div className="text-center">
        <p className='text-[32px] '>Make the most of your professional life</p>
      </div>

      <div className='bg-white mx-auto rounded-md p-3 w-[450px]'>
         <form>
         <div className='flex flex-col space-y-2'>
            <lable for="username text-[12px]">username</lable>
           <input className = "p-1 rounded-[3px] text-[18px] border focus:outline-black border-black" placeholder='username'/>
         </div>
         <div className='flex flex-col space-y-2 mt-[20px]'>
            <lable for="email text-[12px]">email</lable>
           <input type = "email" className = "p-1 rounded-[3px] text-[18px] border focus:outline-black border-black" placeholder='example@gmail.com'/>
         </div>
         <div className='flex flex-col space-y-2 mt-[20px]'>
            <lable for="email text-[12px]">Password (6 or more characters)</lable>
           <input type="password" className = "p-1 rounded-[3px] text-[18px] border focus:outline-black border-black" />
         </div>
         <div className='flex flex-col space-y-2 mt-[20px]'>
            <lable for="email text-[12px]">profile image</lable>
             <input type = "file" />
         </div>

         <div className='text-center text-[12px] -space-y-3'>
            <p>By clicking Agree & Join, you agree to the LinkedIn <span className='text-blue-600 font-bold'>User</span> </p>
            <p><span className='text-blue-600 font-bold'>Agreement</span>, <span className='text-blue-600 font-bold'>Privacy Policy</span>, and <span className='text-blue-600  font-bold'>Cookie Policy</span>.</p>
         </div>

         <button className='rounded-full p-4 bg-blue-500 mx-auto'>Agree and Join</button>
           </form>
      </div>

    </div>
  )
}

export default Login
