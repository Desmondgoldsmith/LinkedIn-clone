import React,{useState,useEffect, useLayoutEffect} from 'react'
import Footersection from '../LandingPage/Footersection'
import { useDispatch } from 'react-redux';
import { login } from '../../App/Slice/userSlice';
import firebase from 'firebase/compat/app'
import {auth} from '../../firebase2'
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

// const auth = firebase.auth();


function Login() {
    const [name,setName] = useState("")
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const [image,setImage] = useState(null)
    const [imageName,setImageName] = useState("")
    const dispatch = useDispatch()



  const registerUser = (e) => {
      e.preventDefault() 
      if(!name){
        alert("Please Enter your full Name !")
      }else if(!email){
        alert("Please Enter your Email !")
      }
      else if(!password){
        alert("Please Enter your Password !")
      }
     
      createUserWithEmailAndPassword(auth,email, password)
      .then((userAuth) => {
        // Save the user's profile picture to Firebase storage
        const storageRef = firebase.storage().ref(`profilePictures/${userAuth.user.uid}`);
        storageRef.put(image)
          .then((snapshot) => {
            console.log('Profile picture uploaded');
          })
          .catch((error) => {
            console.error(error);
          });
        // Update the user's display name with their username
        userAuth.user.updateProfile({
          displayName: name,
          profileImg : image,
        }).then(() => {
          console.log('User profile updated');
          // dispatch in redux store
          dispatch(login({
                 email : userAuth.users.email,
                 displayName : userAuth.users.name,
                 uid : userAuth.users.uid,
                 photoUrl: userAuth.users.photo,
                }))
        }).catch((error) => alert(error.message));
      })
      .catch((error) => alert(error.message))

      // passing the new user's name and password to firebase to auth them
      // const auth = getAuth();
      // createUserWithEmailAndPassword(auth,email,password)
      // .then((userAuth) => {
      //    userAuth.updateProfile(auth, {
      //     profileName : name,
      //     profileImg : image,
      //   }).then(() => {
      //     dispatch(login({
      //      email : userAuth.user.email,
      //      displayName : userAuth.user.name,
      //      uid : userAuth.user.uid,
      //      photoUrl: userAuth.user.photo,
      //     }))
      //   })
      // }).catch((error) => alert(error.message))
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
         <form onSubmit={(e)=>registerUser(e)}>
         <div className='flex flex-col '>
            <lable  className="username text-[12px]">username</lable>
           <input value = {name} onChange={(e) => setName(e.target.value)} className = "p-1 rounded-[3px] text-[18px] border focus:outline-black border-black" placeholder='username'/>
         </div>
         <div className='flex flex-col  mt-[20px]'>
            <lable className="email text-[12px]">email</lable>
           <input value = {email} onChange={(e)=>setEmail(e.target.value)} type = "email" className = "p-1 rounded-[3px] text-[18px] border focus:outline-black border-black" placeholder='example@gmail.com'/>
         </div>
         <div className='flex flex-col  mt-[20px]'>
            <lable className="email text-[12px]">Password (6 or more characters)</lable>
           <input value = {password} onChange={(e) => setPassword(e.target.value)} type="password" className = "p-1 rounded-[3px] text-[18px] border focus:outline-black border-black" />
         </div>
         <div className='flex flex-col space-y-2 mt-[20px]'>
            <lable className="email text-[12px]">profile image</lable>
             <input type = "file" accept="image/*"  onChange={(e) => {setImage(e.target.files[0]) && setImageName(e.target.files[0].name)
            if(e.target.files){
               setImage(URL.createObjectURL(e.target.files[0]))
           }
          }
             }
          />
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
