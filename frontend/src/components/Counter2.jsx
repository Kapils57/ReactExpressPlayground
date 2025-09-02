import React from 'react'
import '../css/Counter2.css'
function Counter2(props) {


  return (
    <div className='counter'>   
        <h4>Check for Lifting State Up </h4>
        
        <div className='display'>
            <p className='count2'>You have clicked {props.count} times</p>
        </div>
        
        
    </div>
  )
}

export default Counter2