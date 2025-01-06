import React from 'react';
import '../styles/Event.css';

const Event = ({ name, date, divisions, image, link }) => {
    const currentDate = new Date();  // Get the current date and time
    const eventDate = new Date(date);  // Convert the event date into a Date object
  
    // Check if the event has passed
    const isEventPassed = eventDate < currentDate;
  return (
    <div className="event-card">
      <img src={image} alt={name} className="event-image" />
      <h3>{name}</h3>
      <p>{date}</p>
      <div className="divisions">
        <strong>Divisions:</strong>
        {divisions.map((division, index) => (
          <span key={index}>{division}</span>
        ))}
      </div>
      <a href={link} className="register-link">{isEventPassed ? "Results" : "Register"}</a>
    </div>
  );
};

export default Event;
