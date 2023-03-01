import './index.css';
import React from 'react';

const Filter = () => {
  const [filter, setFilter] = React.useState([]);
  console.log(filter);
  const searchHandler = event => {
    if (event.target.checked) {
      setFilter(...filter, event.target.value);
    } else {
      setFilter(filter.filter(item => item !== event.target.value));
    }
    event.target.checked = !event.target.checked;
  };
  return (
    // <div className="filter">
    //   <div className="option">
    //     <input
    //       type="radio"
    //       id="all"
    //       value="all"
    //       onClick={radioButtonClickHandler}
    //       checked={filter === 'all'}
    //       onChange={event => {
    //         if (event.checked) {
    //           setFilter(event.target.value);
    //         } else {
    //           setFilter('all');
    //         }
    //       }}
    //     />
    //     <label>All</label>
    //   </div>
    //   <div className="option">
    //     <input
    //       type="radio"
    //       id="registered"
    //       value="registered"
    //       onClick={radioButtonClickHandler}
    //       checked={filter === 'registered'}
    //       onChange={event => {
    //         if (event.checked) {
    //           setFilter(event.target.value);
    //         } else {
    //           setFilter('all');
    //         }
    //       }}
    //     />
    //     <label>Registered</label>
    //   </div>
    //   <div className="option">
    //     <input
    //       type="radio"
    //       id="bookmarked"
    //       value="bookmarked"
    //       onClick={radioButtonClickHandler}
    //       checked={filter === 'bookmarked'}
    //       onChange={event => {
    //         if (event.checked) {
    //           setFilter(event.target.value);
    //         } else {
    //           setFilter('all');
    //         }
    //       }}
    //     />
    //     <label>Bookmarked</label>
    //   </div>
    //   <div className="option">
    //     <input
    //       type="radio"
    //       id="available"
    //       value="available"
    //       onClick={radioButtonClickHandler}
    //       checked={filter === 'available'}
    //       onChange={event => {
    //         if (event.checked) {
    //           setFilter(event.target.value);
    //         } else {
    //           setFilter('all');
    //         }
    //       }}
    //     />
    //     <label>Seats Available</label>
    //   </div>
    // </div>
    <div className="checkbox-filter-container">
      <input type="checkbox" id="all" name="all" value="all" onChange={searchHandler} />
      <label>All</label>
      <br />
      <input type="checkbox" id="register" name="register" value="register" onChange={searchHandler} />
      <label>Registered</label>
      <br />
      <input type="checkbox" id="Bookmark" name="Bookmarked" value="Bookmarked" onChange={searchHandler} />
      <label>Bookmarked</label>
      <br />
      <input type="checkbox" id="available" name="available" value="available" onChange={searchHandler} />
      <label>Seats Available</label>
    </div>
  );
};

export default Filter;
