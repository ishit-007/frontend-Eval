/* eslint-disable no-unused-vars */
import './index.css';

import React, { useContext } from 'react';
import { makeRequest, GET_THEMES_DATA } from '../../util/makeRequest';
import { ThemeContext } from '../../contexts/ThemeContext';

const Footer = () => {
  const { appTheme, changeTheme } = useContext(ThemeContext);
  const [themes, setThemes] = React.useState([]);
  React.useEffect(() => {
    makeRequest(GET_THEMES_DATA, {}).then(themesData => {
      setThemes(themesData.themes);
    });
  }, []);

  const themeButtonClicked = event => {
    changeTheme(event.target.style.backgroundColor);
  };
  return (
    <div className="footer" style={{ backgroundColor: appTheme }}>
      <div className="themes">
        <p>THEMES</p>
        {themes.map(theme => {
          return (
            <div
              onClick={themeButtonClicked}
              className="theme"
              key={theme.id}
              style={{
                backgroundColor: theme.colorHexCode,
                height: '60px',
                width: '60px',
                borderRadius: '10px',
              }}></div>
          );
        })}
      </div>

      <button>SAVE THEME</button>
    </div>
  );
};

export default Footer;
