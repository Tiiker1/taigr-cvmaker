import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="home">
      <h1>Welcome to CV Generator</h1>
      <p>Create a professional CV easily.</p>
      <Link to="/generate-cv">
        <button className="btn">Get Started</button>
      </Link>
    </div>
  );
};

export default Home;