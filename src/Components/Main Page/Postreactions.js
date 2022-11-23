import React from 'react'
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import MessageRoundedIcon from '@mui/icons-material/MessageRounded';
import RepeatIcon from '@mui/icons-material/Repeat';
import SendIcon from '@mui/icons-material/Send';
import './postreactions.css'

function Postreactions({name1,name2,name3,name4}) {
  return (
    <div className='post_reactions'>
    <p><ThumbUpOffAltIcon/><span>{name1}</span></p>
    <p><MessageRoundedIcon/><span>{name2}</span></p>
    <p><RepeatIcon/><span>{name3}</span></p>
    <p><SendIcon/><span>{name4}</span></p>
    </div>
  )
}

export default Postreactions