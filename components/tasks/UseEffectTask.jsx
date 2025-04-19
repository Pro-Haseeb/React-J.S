
import React , {useState , useEffect} from 'react';

// import List from './list'

const UseEffectTask = () => {
  
const [mouse, setMouse]= useState({x:0, y:0});
useEffect(()=>{
 function mouseMove(directions){
  setMouse({x:directions.clientX , y:directions.clientY});
 }
 window.addEventListener('mousemove', mouseMove);

 return()=>{
  window.removeEventListener('mousemove', mouseMove);
 }
},[mouse]);


 



  return (
    <div>
     
   <h2>X : {mouse.x}</h2>
  <h2>Y : {mouse.y}</h2>
    </div>
  )
}

export default UseEffectTask;