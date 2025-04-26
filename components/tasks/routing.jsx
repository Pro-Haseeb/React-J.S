
import React, { useEffect, useRef }   from 'react';
import  List from "./list";
import UseRefernce from './useRefernce';
import Form from './form';
import Condition from './condition';

import {Route,Routes, BrowserRouter, Link} from 'react-router-dom';
const Routing = ()=>{
  const reff = useRef("");

  useEffect(()=>{
    reff.current.style.display="flex"; 
    reff.current.style.marginLeft = "5vh";
    reff.current.style.width = "50vw";
    reff.current.style.justifyContent = "space-between";
  },[]);
  
   
  
  return (
    
    <>
        <BrowserRouter>
        <nav ref={reff}>
           <Link to = "/">useRefernce</Link> <br />
           <Link to = "/list">list</Link> <br />
           <Link to = "/condition">Condition Rendering</Link> <br />
           <Link to = "/form">Form React J.S</Link> <br />
        </nav>

       <Routes>
        <Route path='/' element={<UseRefernce/>}/>
        <Route path='/list' element={<List/>}/>
        <Route path='/condition' element={<Condition/>}/>
        <Route path='/form' element={<Form/>}/>
       </Routes>
    </BrowserRouter>
    </>
    
    
  )
}

export default Routing;

