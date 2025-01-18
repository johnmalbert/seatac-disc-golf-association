import React, { useState, useEffect } from 'react';
import '../styles/HomePage.css';

const images = [
  '/images/seatac-1.jpg',
  '/images/seatac-2.jpg',
  '/images/seatac-3.jpg',
  '/images/seatac-4.jpg',
  '/images/seatac-5.jpg'
];

function HomePage() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Auto image slide every few seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000); // Change image every 4 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="home-page">
      {/* Revolving Image Display */}
      <section className="course-highlight">
        <h1>Chuck Mintz Disc Golf</h1>
        <h3>Est. 2017 • If at first you don't succeed, redefine success.</h3>
        <div className="revolving-image">
          <img src={images[currentImageIndex]} alt="Seatac Disc Golf Course" />
        </div>
        <p>Located in Seattle, Washington, the Seatac Disc Golf Course is renowned for its scenic beauty and challenging layouts. It's a favorite among local players, featuring tight wooded fairways, diverse hole lengths, and frequent updates to course design.</p>
      </section>

      {/* News Section */}
      <section className="news-section">
        <h2>Latest News</h2>
        <ul>
          <li>Hole positions have been recently changed back to the Tree-Smack layout!</li>
          <li>Upcoming tournaments include the Seatac Tree-Smack in January, 2025</li>
        </ul>
        <a href="/events" className="events-link">See all upcoming events</a>
        <img src="/sdga.png" alt="Seatac Disc Golf Course" />
      </section>

      {/* About Chuck */}
      <section className="about-chuck">
        <h2>About Chuck</h2>
        <div className="about-chuck-content">
          <img src="/images/cgm.jpg" alt="Chuck" className="chuck-image" />
          <p>Chuck has dedicated thousands of hours to maintaining and improving the Seatac Disc Golf Course. He has also directed over 100 tournaments in the Seattle area, making Seatac a premier destination for disc golfers.</p>
        </div>
      </section>

      {/* PayPal Donation Link and Contact Form */}
      <section className="support-section">
        <a href="https://www.paypal.com/donate?hosted_button_id=EXAMPLE" className="donate-button">Donate to Seatac Disc Golf</a>

        <h2>Contact Us</h2>
        <form action="https://formspree.io/f/example" method="POST" className="contact-form">
          <input type="text" name="name" placeholder="Your Name" required />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea name="message" placeholder="Your Message" required></textarea>
          <button type="submit">Send</button>
        </form>
      </section>
    </div>
  );
}

export default HomePage;
