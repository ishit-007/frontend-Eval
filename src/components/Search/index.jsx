import './index.css';

import React from 'react';

import ProptTypes from 'prop-types';

const Search = props => {
  const inputChangeHandler = event => {
    props.setSearchedText(event.target.value);
  };
  return (
    <div className="search">
      <input type="text" placeholder="EVENT NAME" onChange={inputChangeHandler} />
      <i className="fa fa-search"></i>
    </div>
  );
};

Search.propTypes = {
  setSearchedText: ProptTypes.func,
  searchedText: ProptTypes.string,
};
export default Search;
