import React from 'react'
import './Maincontent.css'
import Postreactions from './Postreactions'

function Addpost({posts}) {
  return (
    <div className=''>
   {posts && posts.length > 0 ? posts?.map((posts) =>
    <div className = 'post_container'>
       <div className = "post_header">
       <div className = "left_division">
          <img src = "https://media.licdn.com/dms/image/D4E03AQGwZt1JT4mh4g/profile-displayphoto-shrink_200_200/0/1673142753502?e=1678924800&v=beta&t=N-mjxLo38JjH-E9kZC9bXXLhOqTFLcSNuIw3dBc85wk" alt = "profile_image"/>
       </div>
       <div className = 'right_division'>
        <h3>Desmond Goldsmith</h3>
        <p>C# || Laravel || React.JS || React Native</p>
       </div>
       </div>
       <div className='post_text'>
        <p>{posts.data.post}</p>
       </div>
       <div className='post_img '>
       <img src={posts.data.image} className = "h-[300px] w-[100%]" alt='post'/>
       </div>
       <div className='reactions'>
        <div className='left_reaction'>
         <img src = 'https://static-exp1.licdn.com/sc/h/8ekq8gho1ruaf8i7f86vd1ftt' alt='like'/>
         <p>You liked this.</p>
        </div>
        <div className = 'right_reaction'>
         <p>0 comment</p>
        </div>
       </div>
       
       <hr/>
       
       <div className = 'emoticons'>
       <Postreactions  name1 = "Like" name2 = "Comment" name3 = "Repost" name4 = "Send"/>
       </div>
     </div>
    )
     : 
     <div className = 'post_container'>
        <h3>No Post Available !</h3>
     </div>
    }
   {/* posts && posts.length > 0 ? : 'No Posts Available' */}
     </div>
  )
}

export default Addpost