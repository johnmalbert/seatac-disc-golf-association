import React from 'react';
import Event from './Event';
import '../styles/EventsPage.css';

const EventsPage = () => {
  const upcomingEvents = [
    { id: 1, name: "Seatac Tree Smack VIII - MA1 & MA3", date: "January 11, 2025", divisions: ["Amateur"], image: "/images/seatac-2.jpg", link: "https://www.discgolfscene.com/tournaments/SeaTac_Tree_Smack_VIII_day_1_2025" },
    { id: 2, name: "Seatac Tree Smack VIII - All Women's Divisions + MA40", date: "January 12, 2025", divisions: ["Pro", "Amateur"], image: "/images/seatac-2.jpg", link: "https://www.discgolfscene.com/tournaments/SeaTac_Tree_Smack_VIII_All_Womens_Divisions_plus_MA40_2025" },
    { id: 3, name: "Seatac Tree Smack VIII - Pro MP              .", date: "January 18, 2025", divisions: ["Pro"], image: "/images/seatac-2.jpg", link: "https://www.discgolfscene.com/tournaments/SeaTac_Tree_Smack_VIII_Pro_MP_Divisions_2025" },
    { id: 4, name: "Seatac Tree Smack VIII - MA2, MA4, MA50, MA60, MA70", date: "January 18, 2025", divisions: ["Amateur"], image: "/images/seatac-2.jpg", link: "https://www.discgolfscene.com/tournaments/SeaTac_Tree_Smack_VIII_All_other_Am_divisions_2025" },
    { id: 5, name: "Seatac Takeoff 2025", date: "TBD", divisions: ["Pro", "Amateur"], image: "/images/takeoff.jpg", link: "https://www.discgolfscene.com/tournaments/SeaTac_Takeoff_2025_Pro_Only" },
  ];

  const pastEvents = [
    { id: 3, name: "Get Your Points", date: "December 21, 2024", divisions: ["Pro", "Amateur"], image: "/images/seatac-2.jpg", link: "https://www.pdga.com/tour/event/86527" }
  ];

  return (
    <div className="events-page">
      <section className="upcoming-events">
        <h2>Upcoming Events</h2>
        <div className="events-grid">
          {upcomingEvents.map(event => (
            <Event key={event.id} {...event} />
          ))}
        </div>
      </section>

      <section className="past-events">
        <h2>Past Events</h2>
        <div className="events-grid">
          {pastEvents.map(event => (
            <Event key={event.id} {...event} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default EventsPage;
