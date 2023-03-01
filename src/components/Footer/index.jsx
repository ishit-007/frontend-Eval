import './index.css';

import React from 'react';
import { makeRequest, GET_THEMES_DATA } from '../../util/makeRequest';

const Footer = () => {
  const [themes, setThemes] = React.useState([]);
  React.useEffect(() => {
    makeRequest(GET_THEMES_DATA, {}).then(themesData => {
      setThemes(themesData.themes);
    });
  }, []);
  return (
    <div className="footer">
      <div className="themes">
        <p>THEMES</p>
        {themes.map(theme => {
          return (
            <div
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
