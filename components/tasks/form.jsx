
import React, { useState } from 'react';



const Form = () => {
  const[namee, setName] = useState("");
  const[email, setEmail] = useState("");
  const[age, setAge] = useState("");
  const[submitMessage, setsubmitMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if(namee && age && email)
    setsubmitMessage("Form Submited :-");
  else
  setsubmitMessage("Wrong Information")
   }
  
const handleChange = (e) => {
  const {name , value} = e.target;

  if(name === "name")
    setName(value);
  else if(name === "email")
    setEmail(value);
  else
  setAge(value);
};

  return (
    <div>
     <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name: </label>
        <input type="text" name='name' value={namee}  onChange={handleChange}/><br />

        <label htmlFor="email">Email: </label>
        <input type="text" name='email' value={email} onChange={handleChange} /> <br />

        <label htmlFor="age">Age: </label>
        <input type="number" value={age} name='age' onChange={handleChange}/><br />

        <button type='submit'>submit</button>
     </form>
      
      <div>
         <p>Name:</p> {namee} <br />
         <p>Email:</p> {email} <br />
         <p>Age: </p> {age} <br />
      </div>
      <p >{submitMessage}</p>
    </div>
  )
}

export default Form;