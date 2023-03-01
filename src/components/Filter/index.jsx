import './index.css';
import React from 'react';
import { ThemeContext } from '../../contexts/ThemeContext';

const Filter = () => {
  const [display, setDisplay] = React.useState(true);
  const { appTheme } = React.useContext(ThemeContext);
  const [filter, setFilter] = React.useState();

  return (
    <>
      <h1
        style={{ textAlign: 'center' }}
        onClick={() => {
          if (display === 'none') {
            setDisplay('flex');
          } else {
            setDisplay('none');
          }
        }}>
        FILTER
      </h1>
      <div className="filter" style={{ color: appTheme, display: display }}>
        <div className="option">
          <input
            style={{ accentColor: appTheme, border: `4px solid ${appTheme}` }}
            type="radio"
            id="all"
            value="all"
            // onClick={}
            checked={filter === 'all'}
            onChange={event => {
              if (!event.checked) {
                setFilter(event.target.value);
              } else {
                setFilter('all');
              }
            }}
          />
          <label>ALL</label>
        </div>
        <div className="option">
          <input
            style={{ accentColor: appTheme, border: `4px solid ${appTheme}` }}
            type="radio"
            id="registered"
            value="registered"
            // onClick={}
            checked={filter === 'registered'}
            onChange={event => {
              if (!event.checked) {
                setFilter(event.target.value);
              } else {
                setFilter('all');
              }
            }}
          />
          <label>REGISTERED</label>
        </div>
        <div className="option">
          <input
            style={{ accentColor: appTheme, border: `4px solid ${appTheme}` }}
            type="radio"
            id="bookmarked"
            value="bookmarked"
            // onClick={}
            checked={filter === 'bookmarked'}
            onChange={event => {
              if (!event.checked) {
                setFilter(event.target.value);
              } else {
                setFilter('all');
              }
            }}
          />
          <label>BOOKMARKED</label>
        </div>
        <div className="option">
          <input
            style={{ accentColor: appTheme, border: `4px solid ${appTheme}` }}
            type="radio"
            id="available"
            value="available"
            // onClick={}
            checked={filter === 'available'}
            onChange={event => {
              if (!event.checked) {
                setFilter(event.target.value);
              } else {
                setFilter('all');
              }
            }}
          />
          <label>SEATS AVAILABLE</label>
        </div>
      </div>
    </>
  );
};

export default Filter;
