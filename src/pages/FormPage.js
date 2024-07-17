// src/pages/FormPage.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Form from '../components/Form';

const FormPage = ({ setCvData }) => {
  const navigate = useNavigate();

  const handleFormSubmit = (data) => {
    setCvData(data);
    navigate('/cv');
  };

  return (
    <div>
      <Form onSubmit={handleFormSubmit} />
    </div>
  );
};

export default FormPage;