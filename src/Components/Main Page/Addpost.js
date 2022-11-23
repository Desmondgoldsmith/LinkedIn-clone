import React from 'react'
import './Maincontent.css'
import Postreactions from './Postreactions'

function Addpost({postImage,posts}) {
  return (
    <div>
   
   {posts?.map((posts) =>
    <div className = 'post_container'>
       <div className = "post_header">
       <div className = "left_division">
          <img src = "https://media-exp1.licdn.com/dms/image/C4D03AQEHVf4AElfMgg/profile-displayphoto-shrink_200_200/0/1614036542904?e=1673481600&v=beta&t=WP0DfeTq4YdzmsnOyL0JoBRNZt5WKYHP1s9DpYDXboY" alt = "profile_image"/>
       </div>
       <div className = 'right_division'>
        <h3>Desmond Goldsmith</h3>
        <p>C# || Laravel || React.JS || React Native</p>
       </div>
       </div>
       <div className='post_text'>
        <p>{posts.data.post}</p>
       </div>
       <div className='post_img'>
       <img src={posts.data.image} alt='post'/>
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
    )}
   {/* posts && posts.length > 0 ? : 'No Posts Available' */}
     </div>
  )
}

export default Addpost