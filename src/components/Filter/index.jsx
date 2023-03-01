import './index.css';
import React from 'react';

const Filter = () => {
  const [filter, setFilter] = React.useState('all');
  const radioButtonClickHandler = event => {
    if (event.target.checked) {
      setFilter(event.target.value);
    } else {
      setFilter('all');
    }
    event.target.checked = !event.target.checked;
  };
  return (
    <div className="filter">
      <div className="option">
        <input
          type="radio"
          id="all"
          value="all"
          onClick={radioButtonClickHandler}
          checked={filter === 'all'}
          onChange={event => {
            if (event.checked) {
              setFilter(event.target.value);
            } else {
              setFilter('all');
            }
          }}
        />
        <label>All</label>
      </div>
      <div className="option">
        <input
          type="radio"
          id="registered"
          value="registered"
          onClick={radioButtonClickHandler}
          checked={filter === 'registered'}
          onChange={event => {
            if (event.checked) {
              setFilter(event.target.value);
            } else {
              setFilter('all');
            }
          }}
        />
        <label>Registered</label>
      </div>
      <div className="option">
        <input
          type="radio"
          id="bookmarked"
          value="bookmarked"
          onClick={radioButtonClickHandler}
          checked={filter === 'bookmarked'}
          onChange={event => {
            if (event.checked) {
              setFilter(event.target.value);
            } else {
              setFilter('all');
            }
          }}
        />
        <label>Bookmarked</label>
      </div>
      <div className="option">
        <input
          type="radio"
          id="available"
          value="available"
          onClick={radioButtonClickHandler}
          checked={filter === 'available'}
          onChange={event => {
            if (event.checked) {
              setFilter(event.target.value);
            } else {
              setFilter('all');
            }
          }}
        />
        <label>Seats Available</label>
      </div>
    </div>
  );
};

export default Filter;
