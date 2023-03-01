/* eslint-disable no-unused-vars */
import './index.css';
import React from 'react';
import Header from '../Header';
import { makeRequest, GET_EVENT_BY_ID } from '../../util/makeRequest';
import { useParams } from 'react-router-dom';
import { ThemeContext } from '../../contexts/ThemeContext';

const SingleCard = () => {
  const { appTheme } = React.useContext(ThemeContext);
  const { id } = useParams();
  const [card, setCard] = React.useState({});
  React.useEffect(() => {
    makeRequest(GET_EVENT_BY_ID(id), {}).then(data => {
      setCard(data);
    });
  }, []);

  return (
    <div className="card-container">
      <div className="single-card">
        <div className="image">
          <img src={card.imgUrl} alt="" />
        </div>

        <div className="content" style={{ backgroundColor: appTheme }}>
          <h3>{card.name}</h3>
          <p className="description">{card.description}</p>
          <p className="venue">Venue:{card.venue}</p>
          <div className="timestamp">
            <p className="date">Date:{new Date(card.datetime).toLocaleDateString()}</p>
            <p className="time">Time:{new Date(card.datetime).toLocaleTimeString()}</p>
          </div>
          <div className="options"></div>
          <div className="register-unregister">
            <button className="register">Register</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleCard;
