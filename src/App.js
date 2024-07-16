import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import GenerateCV from './pages/GenerateCV';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/generate-cv" element={<GenerateCV />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;