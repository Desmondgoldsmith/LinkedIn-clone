import React from 'react'
import './join.css'

const base_url = "https://static-exp1.licdn.com/aero-v1/sc/h/4ezbw852t2wrgf27zl1o1qtu7";
function Join() {
  return (
    <div className='join_' style = {{
    backgroundPosition: "center center",
    backgroundImage : `url("${base_url}")`,
    backgroundSize: "cover",
    }}>
    <h2>Join your colleagues, classmates, and friends on LinkedIn.</h2>
    <button>Get started</button>
    </div>
  )
}

export default Join