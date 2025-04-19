
import React, { useState } from 'react';
import counterContext from './context/context';
import Task from './components/tasks/TaskUseEffect2';
const App = () => {
  const [counterr, setCount] = useState(0);
  
  
  return (
    
    <div>
    <Task/>
    
     
    </div>
    
  )
}

export default App;

// App 
//  TaskUseEffext2   
//          UseEffectTask   
//                    List
//                       Button