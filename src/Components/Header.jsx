import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import './Header.css';



function Header() {
  const navigate = useNavigate();
  return (
    <header className='header'>
      <img
        src="/imagenes/logo1.jpeg"
        alt="Logo"
        className="logo"
        onClick={() => navigate('/')}
        style={{ cursor: 'pointer' }}
      />
      
    </header>
    );
  }

  export default Header;
  