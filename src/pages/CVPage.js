// src/pages/CVPage.js
import React from 'react';
import CV from '../components/CV';

const CVPage = ({ cvData }) => {
  return (
    <div>
      {cvData ? <CV cvData={cvData} /> : <p>No CV data available. Please fill out the form first.</p>}
    </div>
  );
};

export default CVPage;