import React from 'react';
import '../styles/HeroSection.css';

const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <h1>Discover Your Next Favorite Movie</h1>
        <p>
          Explore thousands of movies, get personalized recommendations, and create your ultimate watchlist. Your perfect movie night starts here.
        </p>
      </div>
      <div className="contact-form">
        <h2>Get in Touch</h2>
        <form>
          <input type="text" placeholder="Your Name" />
          <input type="email" placeholder="Your Email" />
          <textarea placeholder="Your Message" />
          <button type="submit">Send Message</button>
        </form>
      </div>
    </section>
  );
};

export default HeroSection;
