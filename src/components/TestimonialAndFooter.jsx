import React from 'react';
import '../styles/TestimonialAndFooter.css';

const TestimonialAndFooter = () => {
  return (
    <>
      <section className="testimonials">
        <h2>What Our Users Say</h2>
        <div className="testimonial-cards">
          <div className="card">
            <p>
              "This movie app has completely changed how I discover new films.
              The recommendations are spot-on!"
            </p>
            <h4>John Doe</h4>
          </div>
          <div className="card">
            <p>
              "I love how easy it is to keep track of movies I want to watch.
              The interface is so user-friendly!"
            </p>
            <h4>Sarah Smith</h4>
          </div>
          <div className="card">
            <p>
              "The detailed movie information and ratings help me make better
              choices for movie night."
            </p>
            <h4>Mike Johnson</h4>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="footer-content">
          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul>
              <li>About Us</li>
              <li>Services</li>
              <li>Blog</li>
              <li>Privacy Policy</li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>Features</h4>
            <ul>
              <li>Movie Search</li>
              <li>Watchlist</li>
              <li>Recommendations</li>
              <li>Reviews</li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>Contact Us</h4>
            <p>Email: info@moviesearch.com</p>
            <p>Phone: (123) 456-7890</p>
            <p>Address: 123 Movie Street</p>
          </div>
          <div className="footer-section">
            <h4>Follow Us</h4>
            <div className="social-icons">
              <i className="fab fa-facebook"></i>
              <i className="fab fa-twitter"></i>
              <i className="fab fa-instagram"></i>
              <i className="fab fa-linkedin"></i>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          &copy; 2025 MovieSearch. All rights reserved.
        </div>
      </footer>
    </>
  );
};

export default TestimonialAndFooter;
