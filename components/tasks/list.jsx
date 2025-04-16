import React from 'react';




const List = () => {
  const fruits = ["Mango", "Apple", "Banana"]
  
  return (
    <div>
      {fruits.map((fruit, index)=>
        ( <li key={index} >{fruit}   </li>  ))
       
        }
      
    </div>
  )
}

export default List;