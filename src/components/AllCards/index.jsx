/* eslint-disable no-unused-vars */
import './index.css';
import React from 'react';
import Card from '../Card';
import Search from '../Search';

import { makeRequest, BACKEND_URL, GET_EVENTS_DATA } from '../../util/makeRequest';

const AllCards = () => {
  const [searchedText, setSearchedText] = React.useState('');
  const [matchingEvents, setMatchingEvents] = React.useState([]);
  const [events, setEvents] = React.useState([]);
  const sortEventsByDate = events => {
    events.sort((a, b) => {
      const date1 = new Date(a.datetime);
      const date2 = new Date(b.datetime);
      return date1 - date2;
    });
  };
  React.useEffect(() => {
    makeRequest(GET_EVENTS_DATA, {}).then(data => {
      sortEventsByDate(data);
      setEvents(data);
    });
  }, []);
  return (
    <>
      <div className="all-Cards">
        <Search searchedText={searchedText} setSearchedText={setSearchedText} />
      </div>
      <div className="cards-container">
        {events.map(event => {
          if (!event.name.toLowerCase().includes(searchedText.toLowerCase())) {
            return null;
          }
          return <Card props={event} key={event.id} />;
        })}
      </div>
    </>
  );
};

export default AllCards;
