import React from 'react'
import './Maincontent.css'
import Postreactions from './Postreactions'

function Addpost({loading,posts}) {
  return (
    <div className='mb-2'>
    { loading ? (
    <div className='w-[100%] bg-white rounded-md mt-12'>
    <div>
         <img src = "/loader.gif" className = "h-[50px]  mx-auto"  alt = "loader"/>
    </div>
    </div>
    )
   :
     posts?.map((posts) =>
    <div key = {posts.id} className = 'post_container'>
       <div className = "post_header">
       <div className = "left_division">
          <img src = "https://i.pravatar.cc/150?img=3" alt = "profile_image"/>
       </div>
       <div className = 'right_division'>
        <h3>Desmond Goldsmith</h3>
        <p>C# || Laravel || React.JS || React Native</p>
       </div>
       </div>
       <div className='post_text'>
        <p>{posts.data.post}</p>
       </div>
       
       {posts.data.image.includes('images%2Fundefined?') //if image urls includes an undefined string, display none else if the url is intact display the image
       ?
       ""
       :
       <div className='post_img '>
       <img src={posts.data.image} className = "max-w-full h-[450px]" alt='post'/>
       </div>     
       }
         
       
       
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
    }

{/* hide 'no post available when the post is actually > 0 else show it' */}
    <div className = {`${posts.length > 0 ? 'hidden' : 'block'}`}> 
       {posts.length <= 0 ?
      <div className={`w-[100%] bg-white rounded-md mt-12 `}>
    <div>
      <p className = "text-[14px] p-3">No Posts Available</p>
     </div>
    </div>
    :
    ""
    }
    </div>
   
   
     </div>
  )
}

export default Addpost