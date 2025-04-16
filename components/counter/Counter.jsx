import React, { useState } from 'react';
// import "./CounterStyle.css";
const Counter = () => {
  const [count,setCount]=useState(0);
  const Increment = ()=>
  {
  setCount(count+1);
   console.log(count);
  }
 
  return (
    <div><h1>Like Counter: {count}</h1>
     <button className='but' onClick={Increment}>Increment</button>
     
    </div>
   
  )
}

export default Counter;