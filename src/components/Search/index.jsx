import './index.css';

import React, { useContext } from 'react';

import ProptTypes from 'prop-types';
import { ThemeContext } from '../../contexts/ThemeContext';

const Search = props => {
  const { appTheme } = useContext(ThemeContext);
  const inputChangeHandler = event => {
    props.setSearchedText(event.target.value);
  };
  return (
    <div className="search">
      <input type="text" placeholder="EVENT NAME" onChange={inputChangeHandler} style={{ borderColor: appTheme }} />
      <i className="fa fa-search" style={{ fil: appTheme }}></i>
    </div>
  );
};

Search.propTypes = {
  setSearchedText: ProptTypes.func,
  searchedText: ProptTypes.string,
};
export default Search;
