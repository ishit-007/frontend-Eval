import './index.css';

import React from 'react';
import PropTypes from 'prop-types';

import { useNavigate } from 'react-router-dom';
import { ThemeContext } from '../../contexts/ThemeContext';

const Card = ({ props }) => {
  const navigate = useNavigate();
  const { appTheme } = React.useContext(ThemeContext);
  return (
    <div
      className="card"
      onClick={() => {
        navigate(`/event/${props.id}`);
      }}>
      <div className="image">
        <img src={props.imgUrl} alt="" />
      </div>

      <div className="content" style={{ backgroundColor: appTheme }}>
        <h3>{props.name.toUpperCase()}</h3>
        <p className="description">{props.description}</p>
        <p className="venue">Venue:{props.venue}</p>
        <div className="timestamp">
          <p className="date">Date:{new Date(props.datetime).toLocaleDateString()}</p>
          <p className="time">Time:{new Date(props.datetime).toLocaleTimeString()}</p>
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
