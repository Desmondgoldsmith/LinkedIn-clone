import React from 'react'
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import MessageRoundedIcon from '@mui/icons-material/MessageRounded';
import RepeatIcon from '@mui/icons-material/Repeat';
import SendIcon from '@mui/icons-material/Send';
import './postreactions.css'

function Postreactions({name1,name2,name3,name4}) {
  return (
    <div className='post_reactions'>
    <p><ThumbUpOffAltIcon/>{name1}</p>
    <p><MessageRoundedIcon/></p>
    <p><RepeatIcon/></p>
    <p><SendIcon/></p>
    </div>
  )
}

export default Postreactions