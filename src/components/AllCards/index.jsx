/* eslint-disable no-unused-vars */
import './index.css';
import React from 'react';
import Card from '../Card';
import { makeRequest, BACKEND_URL, GET_EVENTS_DATA } from '../../util/makeRequest';

const AllCards = () => {
  const [searchedText, setSearchedText] = React.useState('');
  const [events, setEvents] = React.useState([]);
  React.useEffect(() => {
    makeRequest(GET_EVENTS_DATA, {}).then(data => {
      setEvents(data);
    });
  }, []);
  return (
    <div className="cards-container">
      {events.map(event => (
        <Card props={event} key={event.id} />
      ))}
    </div>
  );
};

export default AllCards;
