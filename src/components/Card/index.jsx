import './index.css';

import React from 'react';
import PropTypes from 'prop-types';

const Card = ({ props }) => {
  {
    console.log(props);
  }
  return (
    <div className="card">
      <div className="image">
        <img src={props.imgUrl} alt="" />
      </div>

      <div className="content">
        <h1>{props.name}</h1>
        <p className="description">{props.description}</p>
        <p className="venue">Venue:{props.venue}</p>
        <div className="timestamp">
          <p className="date">Date:{new Date(props.datetime).toLocaleDateString()}</p>
          <p className="time">Time:{new Date(props.datetime).toLocaleTimeString()}</p>
        </div>
        <div className="options">
            
        </div>
      </div>
    </div>
  );
};
Card.propTypes = {
  props: PropTypes.object,
  id: PropTypes.number,
  name: PropTypes.string,
  description: PropTypes.string,
  venue: PropTypes.string,
  datetime: PropTypes.string,
  timezone: PropTypes.string,
  areSeatsAvailable: PropTypes.bool,
  isRegistered: PropTypes.bool,
  isBookmarked: PropTypes.bool,
  imgUrl: PropTypes.string,
};
export default Card;
