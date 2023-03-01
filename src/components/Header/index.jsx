import './index.css';
import React, { useContext } from 'react';
import { ThemeContext } from '../../contexts/ThemeContext';

const Header = () => {
  const { appTheme } = useContext(ThemeContext);
  console.log(appTheme);
  return (
    <div className="header" style={{ backgroundColor:appTheme }}>
      <p>EVENTIFY</p>
      <i className="fa-solid fa-magnifying-glass"></i>
    </div>
  );
};

export default Header;
