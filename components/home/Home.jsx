import React from 'react';
import Butt from '../../components/button/Button'
import './HomeStyle.css';


const Home = ({ heading, containerImage }) => {
  return (
    <>
    <div className="bodyy">
    <div className="home">
      <div className="nav">Westmire Wired</div>
      <div className="container">
        <div className="side1">{heading}</div>
        <div className="side2">
          <img src={containerImage} alt="Headset" className="homeImage" />
        </div>
      </div>
      </div>

      <div className="buttons">
       <div className='Buy'> <Butt  btnTitle="Buy Know"/></div>
        <div className="shop"><Butt btnTitle="Shop All" opacity="50%"  btnColor="black"/></div>
      </div>
      </div>
    </>
  );
}
export default Home;