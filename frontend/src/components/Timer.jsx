  import React, { useEffect, useRef, useState } from 'react'
  import '../css/Timer.css'
  function Timer() {
      const [seconds, setSeconds] = useState(0);
      let intervalID = useRef(null);
      useEffect(() => {
          intervalID.current = startTimer();
      
        return () => {
          console.log("component unmounted");
          clearInterval(intervalID.current);
        }
      }, [])
      function startTimer(){
        return setInterval(() => {
                setSeconds(perv => perv + 1)
            }, 1000);
      }
      function stop(){
        
        clearInterval(intervalID.current);
        intervalID.current=null;
          
      }
      function reset() {
        stop();
        setSeconds(0); 
        intervalID.current = startTimer();
      }

    return (
      <div className='counter'>   
          <h4>UseEffect Timer</h4>
          
          <div className='display'>
              <p className='g'>Timer: {seconds}</p>
          </div>

          <input className='bt' type="button" value="Stop" onClick={stop}/>
          <input className='bt' type="button" value="reset" onClick={reset}/>
          
      </div>
    )
  }

  export default Timer