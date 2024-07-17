// src/App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import styled from 'styled-components';
import Header from './components/Header';
import FormPage from './pages/FormPage';
import CVPage from './pages/CVPage';
import GlobalStyle from './GlobalStyles';

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const App = () => {
  const [cvData, setCvData] = useState(null);

  return (
    <Router>
      <AppContainer>
        <GlobalStyle />
        <Header />
        <Routes>
          <Route path="/" element={<FormPage setCvData={setCvData} />} />
          <Route path="/cv" element={<CVPage cvData={cvData} />} />
        </Routes>
      </AppContainer>
    </Router>
  );
};

export default App;
