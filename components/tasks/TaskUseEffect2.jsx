
import React, { useState } from 'react';
import { useEffect } from 'react';
// import UseEffectTask from './UseEffectTask';
const Task = () => {
  const [reSize, setSize]= useState( {x : 0, y : 0});

  useEffect(()=>
  {
    function sizeFunction(){
     setSize({x : window.innerWidth, y: window.innerHeight});
    }
  
  window.addEventListener("resize", sizeFunction);
 alert("hi");
  return( ()=> {
    window.removeEventListener("resize", sizeFunction);
  })
  },[reSize]
)

  
  return (
    <div>
      
    <h2>width {reSize.x}</h2>
    <h2>height {reSize.y}</h2>
     
    </div>
  )
}

export default Task;
