import React from 'react'
import '../css/Child1.css'
import Child2 from './Child2'
function Child1() {
  return (
    <div className='counter'>
      
        <h4>useContext - Child1</h4>
        <div className="display">
            <Child2/>
        </div>
    </div>
  )
}

export default Child1