import React from 'react'
import '../css/Card.css'
import image1 from '../assets/image1.jpg'
function Card(props) {

  return (

    <div className='card'>  
        <h4>{props.name}</h4>
        <div className='image'>
            <img src={props.image}/>
        </div>
        
        <p>{props.description}</p>
        
    </div>

  )
}

export default Card