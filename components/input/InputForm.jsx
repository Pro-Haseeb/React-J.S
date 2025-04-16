import React from 'react';
const name=prompt("Write a Name : ");
const age = Number(prompt("Write a Age : "));
const input=()=>{
  
  return(
    <div>
      <h1>Enter a Name :</h1>
      <p>Name is : {name}</p>
      <h1>Enter a Age: </h1>
      <p>Age is {age}</p>
    </div>
  )
};

export default input;



// import React, { useState } from 'react';

// // InputForm component banate hain
// const InputForm = () => {
//   // State variables banate hain
//   const [name, setName] = useState(''); // Name ke liye state
//   const [password, setPassword] = useState(''); // Password ke liye state

//   // Form submit hone par ye function chalega
//   const handleSubmit = (e) => {
//     e.preventDefault(); // Page refresh hone se rokenge
//     alert(`Name: ${name}, Password: ${password}`); // Alert dikhate hain
//   };

//   return (
//     <form onSubmit={handleSubmit}> {/* Form banate hain */}
//       <div>
//         <label>Name:</label>
//         <input 
//           type="text" 
//           value={name} 
//           onChange={(e) => setName(e.target.value)} // Name update karte hain
//           required 
//         />
//       </div>
//       <div>
//         <label>Password:</label>
//         <input 
//           type="password" 
//           value={password} 
//           onChange={(e) => setPassword(e.target.value)} // Password update karte hain
//           required 
//         />
//       </div>
//       <button type="submit">Submit</button> {/* Submit button */}
//     </form>
//   );
// };

// export default InputForm;