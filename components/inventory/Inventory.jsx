import React, { useState } from 'react';
import Button from "../button/Button"; // Ensure correct path
import "./Inventory.css";

const Inventory = () => {
  let [list, setList] = useState([]);
  let [checkList, setCheckList] = useState(false);
  let [animateAdd, setAnimateAdd] = useState(false); // For animation on adding a product
  let [animateToggle, setAnimateToggle] = useState(false); // For animation on toggling the list

  function addProduct() {
    const product = prompt("Enter a Product: ");
    if (product) {
      setList((prevList) => [...prevList, product]);
      setAnimateAdd(true); // Trigger add animation

      // Reset animation state after a brief delay
      setTimeout(() => setAnimateAdd(false), 500); // 500ms for the bounce animation
    }
  }

  function rem() {
    const pro = prompt("Enter a product to remove");
    if (pro && list.includes(pro)) {
      const del = list.filter((itm) => itm !== pro);
      setList(del);
    } else {
      alert("Product is not in the List");
    }
  }

  function check() {
    setCheckList((prev) => {
      const newCheckList = !prev; // Toggle visibility
      setAnimateToggle(true); // Trigger toggle animation

      // Reset animation state after a brief delay
      setTimeout(() => setAnimateToggle(false), 500); // Adjust duration as needed
      return newCheckList; // Return new state
    });
  }

  return (
    <>
      <div className="buttons">
        <Button onClick={addProduct} message="Add Product" color="blue" />
        <Button onClick={rem} message="Remove Product" />
        <Button onClick={check} message={checkList ? "Hide List" : "Show List"} />
      </div>
<div className="container">
      <div className={`basket ${checkList ? 'show' : 'hide'} ${animateAdd ? 'animation' : ''} ${animateToggle ? 'toggle-animation' : ''}`}>
        <div className="subContainer">
        <h2>Grocery Basket</h2>
        {checkList && (
          <ul>
            {list.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
          
        )}
        </div>
      </div>
      </div>
    </>
  );
}

export default Inventory;