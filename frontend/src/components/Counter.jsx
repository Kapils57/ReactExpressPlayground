import React from 'react'
import '../css/Counter.css'
function Counter(props) {

    function increment(){
        if(props.count<10){
            props.setCount(props.count+1);
        }
    }
    function decrement(){
        if(props.count>0){
            props.setCount(props.count-1);
        }
    }


  return (
    <div className='counter'>   
        <h4>Counter Using Lifting State Up</h4>
        
        <div className='display'>
            <p className='count1'>You have clicked {props.count} times</p>
        </div>
        
        <input className='btn' type="button" value="increment" onClick={increment}/>
        <input className='btn' type="button" value="decrement" onClick={decrement}/>

    </div>
  )
}

export default Counter