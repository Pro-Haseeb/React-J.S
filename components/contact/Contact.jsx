import React from 'react';
// import './ContactStyle.css';


const Contact = () => {
  const[contact, contactSet]=useState(0);
  let chang=()=>{
    console.log("Button Clicked");
  }
  return (
    <>
   <button onClick={chang}></button>
    
    </>
  );
}

export default Contact;
