import React,{useState, useEffect} from "react";
import '../css/About.css'
import axios from 'axios'
function About() {
  const [jokes, setjokes]=useState([]);
  
  
  
  useEffect(()=>{
    axios.get('/api/jokes')
    .then((res)=>{ 
      setjokes(res.data);
      
    })
    .catch((err)=>{
      console.log(err);
      
    })
  },[])



  return(
    <div className='k'>
      <div className='z'>
        <h3 className="p">JOKES: {jokes.length}</h3>
          {
            jokes.map((joke)=>(
            <div className='ty' key={joke.id}>
              <h2 style={{marginTop:'10px', marginRight:'10px'}}>{joke.title}:</h2>
              <p style={{marginTop:'10px', marginRight:'10px', marginLeft:'10px'}}>{joke.content}</p>
            </div>
            ))
          }
      </div>

      
    </div>
  ) 
}

export default About;
