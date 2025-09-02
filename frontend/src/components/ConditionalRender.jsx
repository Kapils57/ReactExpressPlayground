import React, { useState } from 'react'
import '../css/ConditionalRender.css'

function ConditionalRender() {
  const [show, setShow] = useState(true)

  if (show) {
    return (
        
      <div className='counter'> 
      <h4> Conditional Rendering</h4> 
        <div className='display' style={{padding:"10px"}}>
          <p className='CR'>You have clicked to check Conditional Rendering using if-else condition</p>
        </div>
        <button 
          onClick={() => setShow(false)} 
          style={{padding:"8px", borderRadius:"5px", marginTop:"10px",
            marginLeft:"100px"
          }}
        >
          Hide
        </button>
      </div>
    )
  } else {
    return (
      <div className='counter'>
        <h4> Conditional Rendering</h4>
        <p>Hidden state</p>
        <button 
          onClick={() => setShow(true)} 
          style={{padding:"8px", borderRadius:"5px", marginTop:"10px",
           marginLeft:"100px"
          }}
        >
          Show Again
        </button>
      </div>
    )
  }
}

export default ConditionalRender
