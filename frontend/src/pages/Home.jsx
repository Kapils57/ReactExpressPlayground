
import React, {useState, useContext, createContext} from 'react'
import '../css/Home.css';
import Card from '../components/Card.jsx';
import image1 from '../assets/image1.jpg'
import Counter from '../components/Counter.jsx';
import Counter2 from '../components/Counter2.jsx';
import ConditionalRender from '../components/ConditionalRender.jsx';
import { useEffect } from 'react';
import Timer from '../components/Timer.jsx';
import DataFetcher from '../components/DataFetcher.jsx';
import Child1 from '../components/Child1.jsx';




//create a context
const Counting = createContext();


function Home() {
  const cards = [
    { 
      id:1,
      name:"ABC",
      image:image1,
      discription: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perspiciatis, maiores!"
    },
    { id:2,
      name:"DEF",
      image:image1,
      discription: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perspiciatis, maiores!"
    },
    { id:3,
      name:"GHI",
      image:image1,
      discription: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perspiciatis, maiores!"
    }
  ];
  const [count, setCount]= useState(1); 


  // useEffect(() => {          "this will run everytime any change occurs"
  //   alert("Hello");
  // })


  // useEffect(() => {
  //   alert("Hello, this will run only one time because it has empty dependencies")
  
  // }, [])

  // useEffect(()=>{
  //   alert("it will run everytime count changes")
  // },[count])

  // useEffect(()=>{
  //   alert("count has been updated")
  //   return()=>{
  //     alert("count has been unmounted")
  //   }
  // },[count])
  
  return (
    <>
      <div className='c'>
        
        {cards.map((card) => (
          <Card key={card.id}
          name={card.name}
          image={image1}
          description={card.discription}/>
        ))}
        <Counter count={count} setCount={setCount}/>
        <Counter2 count={count} />
        <ConditionalRender/>
        <Timer/>
        <DataFetcher/>
        <Counting.Provider value={count}>
          
          <Child1/>
        </Counting.Provider>
      </div>

    </>
    
  )
}

export default Home
export {Counting}