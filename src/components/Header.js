// src/components/Header.js
import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const HeaderContainer = styled.div`
  width: 100%;
  background: #444;
  color: #fff;
  text-align: center;
`;

const Header = () => {
  return (
    <HeaderContainer>
      <Link to="/" style={{ color: '#fff', textDecoration: 'none' }}>
        <h1>TAIGR CV MAKER</h1>
      </Link>
    </HeaderContainer>
  );
};

export default Header;
