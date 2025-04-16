import React, { useState } from 'react';


const Condition = () => {
let [toggle, setToggle] = useState(false);

  return (
   <>
   {toggle ? ( <h1>Welcome Haseeb, how was the day</h1>) : ""}
   <button onClick={()=>{setToggle(!toggle)}}>
    {toggle ? "hide" : "show"}
   </button>
   </>
  );
};

export default Condition;