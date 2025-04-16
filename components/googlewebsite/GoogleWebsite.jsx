import React, { useState } from 'react';
import './website.css'; // Ensure your CSS file is linked

// Import images
import labLogo from '../../components/googlewebsite/lab logo.jpg';
import dotLogo from '../../components/googlewebsite/dotlog.jpg';
import profileLogo from '../../components/googlewebsite/profilelogo.jpg';
import googleLogo from '../../components/googlewebsite/googleLogo2.png';
import micLogo from '../../components/googlewebsite/google_mic-removebg-preview.png';
import lensLogo from '../../components/googlewebsite/google_lens_logo-removebg-preview.png';


const suggestions = ["JavaScript", "HTML", "CSS", "Frontend Development", "Google Clone"];

const GoogleWebsite = () => {
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const searchShow = () => {
    setShowSuggestions(!showSuggestions);
  };

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
    searchShow();  // Show suggestions when typing
  };

  return (
    <div className="container">
      <div className="navBar">
        <a href="http://gmail.com" className="gmail">Gmail</a>
        <p className="images">Images</p>
        <img src={labLogo} className="googleLabs" alt="Google Labs" />
        <img src={dotLogo} className="applogo" alt="App Logo" />
        <img src={profileLogo} className="profilelogo" alt="Profile" />
      </div>

      <a href="http://google.com">
        <img src={googleLogo} alt="Google Logo" className="logo" />
      </a>

      <div className="innercontainer">
        <form className="search-form">
          <div className="input">
            <input
              type="text"
              id="search-bar"
              className="search-input"
              placeholder="Search..."
              value={searchQuery}
              onClick={searchShow}
              onChange={handleSearchChange}
            />
            {showSuggestions && (
              <ul id="suggestion-list" className="suggestion-list">
                {suggestions.filter(item => item.toLowerCase().includes(searchQuery.toLowerCase())).map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            )}
          </div>
          <img src={micLogo} className="miclogo" alt="Mic" />
          <img src={lensLogo} className="lenslogo" alt="Lens" />

          <div className="buttons">
            <button type="button" className="search1">Google Search</button>
            <button type="button" className="bar">I'm Feeling Lucky</button>
          </div>

          <div>
            <button type="button" className="text">Google offered in: اردو، پښتو، سنڌي</button>
          </div>
        </form>
      </div>

      <div className="foot">
        <p className="text2">Pakistan</p>
        <footer>
          <div className="footer-end">
            <a href="#">About</a>
            <a href="#">Advertising</a>
            <a href="#">Business</a>
            <a href="#">How Search Works</a>
          </div>
        </footer>

        <div className="footer-end2">
          <a href="#" className="Privacy">Privacy</a>
          <a href="#" className="Terms">Terms</a>
          <a href="#" className="Settings">Settings</a>
        </div>
      </div>
    </div>
  );
};

export default GoogleWebsite;
