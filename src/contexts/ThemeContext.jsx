/* eslint-disable react/prop-types */
import React, { useState, createContext } from 'react';


export const ThemeContext = createContext({
  changeTheme: () => {},
  theme: 'black',
});

const ThemeContextProvider = ({ children }) => {
  const [appTheme, setAppTheme] = useState('black');
  const changeTheme = theme => {
    setAppTheme(theme);
  };
  return <ThemeContext.Provider value={{changeTheme, appTheme: appTheme }}>{children}</ThemeContext.Provider>;
};

export default ThemeContextProvider;
