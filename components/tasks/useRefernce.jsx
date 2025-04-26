
import React, { useEffect, useRef } from 'react';


function UseRefernce (){
  
  const reff = useRef("");
  useEffect(()=>{
    reff.current.focus();
    alert("form");
  },[])

  function style(){
    reff.current.style.backgroundColor="yellow";
  }
  
  return (
    
    <>
    <form action="">
     <label htmlFor="name">Name: </label><br />
     <input type="text" /> <br />

     <label htmlFor="Email">Email: </label><br />
     <input onClick={style} type="email" ref={reff} />
    </form>
     
    </>
     
  )
}

export default UseRefernce;

// useRef is liye use hota hai ke hum ek aisi value bana sakein jo component ke re-render hone par bhi change na ho.
// useState se jab hum value change karte hain to pura component dobara render hota hai.
// Agar hum sirf ek variable (let x = 0) ka use karein to har re-render pe x ki value dobara 0 set ho jati hai.

// Lekin useRef me jab hum .current ko change karte hain, to value re-render ke baad bhi waisi hi rehti hai
// aur component dobara render nahi hota.

// useRef ko hum DOM elements (input, div, etc.) ko directly access aur manipulate karne ke liye bhi use karte hain.
// Ye normal JavaScript jaise hota hai (document.querySelector), lekin React me useRef se control milta hai.

// useRef se hum direct DOM manipulation kar sakte hain bina React ke state management me interfere kiye.
