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

      <div className='bg-white mx-auto rounded-md p-2'>
         <form>
           <lable for="username">Username</lable>
           <input className = "rounded-[8px] border border-black" placeholder='username'/>
         </form>
      </div>

    </div>
  )
}

export default Login
