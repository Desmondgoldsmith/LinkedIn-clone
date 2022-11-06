import React from 'react'
import './Maincontent.css'

function Maincontent() {
  return (
    <div className = 'Main_content'>

    <div className = 'left_content'>
       <div className = 'backgroundImage' style = {{
        backgroundImage : `url("https://media-exp1.licdn.com/dms/image/C4E16AQHAvKyuZ98BlQ/profile-displaybackgroundimage-shrink_350_1400/0/1662081045859?e=1673481600&v=beta&t=Bi_sMf1kHknAJ8m8oFPHQ414RwDV51_bMjWmsZkr0FU")`,
        backgroundSize : 'cover',
        backgroundRepeat : 'no-repeat',
    }}>
       </div>
        <h2>I'm on the left side</h2>
    </div>
    <div className = 'center_content'>
    <h2>I'm in the center</h2>

    </div>
    <div className = 'right_content'>
    <h2>I'm on the Right</h2>
    </div>
    </div>
  )
}

export default Maincontent