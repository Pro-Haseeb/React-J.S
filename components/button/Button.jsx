import React from 'react';
import './ButtonStyle.css';

const Button = ({ onClick, message, color }) => {

  return (
    <button className='btn' onClick={onClick} style={
      {backgroundColor:color}
    } >{message}</button>
  );
};

export default Button;
