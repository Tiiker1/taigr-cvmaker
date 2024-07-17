// src/components/Header.js
import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const HeaderContainer = styled.div`
    text-align: center;
    margin-bottom: 20px;
    font-size: 2em;
    animation: scale 2s ease-in-out infinite alternate, glow 2s linear infinite alternate;
  
  @keyframes scale {
    0%, 100% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.1);
    }
  }
  
  @keyframes glow {
    0% {
      text-shadow: 0 0 10px rgba(144, 43, 245, 0.8), 0 0 20px rgba(144, 43, 245, 0.8), 0 0 30px rgba(144, 43, 245, 0.8);
    }
    100% {
      text-shadow: 0 0 20px rgba(144, 43, 245, 0.8), 0 0 30px rgba(144, 43, 245, 0.8), 0 0 40px rgba(144, 43, 245, 0.8);
    }
  }
`;

const Header = () => {
  return (
    <HeaderContainer>
      <Link to="/" style={{ color: 'orangered', textDecoration: 'none' }}>
        <h1>TAIGR CV MAKER</h1>
      </Link>
    </HeaderContainer>
  );
};

export default Header;
