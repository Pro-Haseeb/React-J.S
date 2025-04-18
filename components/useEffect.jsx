
import React , {useState , useEffect} from 'react';



const UseeEffect = () => {
const [mouse, setMouse]= useState(x:0, y:0);
useEffect(()=>{
 function mouseMove(directions){

 }
 window.addEventListener('mousemove', mouseMove);

 return(
    window.removeEventListener('mousemove', mouseMove);
 )
},[mouse]);


 



  return (
    <div>

    
    </div>
  )
}

export default UseeEffect;