import React from 'react';
import '../styles/Featured2.css'; 

const Featured2 = () => {
  return (
    <section className="featured">
      <div className="container">
        <div className="text-content">
          <h2>Discover New Movies</h2>
          <p>
            Get personalized movie recommendations based on your taste. Our
            advanced algorithm analyzes your viewing history to suggest movies
            you'll love. Never run out of great movies to watch!
          </p>
        </div>
        <div className="image-content">
          <img
            src="https://mir-s3-cdn-cf.behance.net/projects/404/da82aa113933149.6031a799ce041.png"
            alt="movie poster"
          />
        </div>
      </div>
      <div className="container">
        <div className="text-content">
          <h2>Create Your Watchlist</h2>
          <p>
            Keep track of movies you want to watch later. Build and organize
            your personal watchlist, rate movies you’ve seen, and share
            recommendations with friends. Your perfect movie night is just a
            click away!
          </p>
        </div>
        <div className="image-content">
          <img
            src="https://joshrosenhanst.com/assets/img/my-watchlist/my-watchlist-main.png"
            alt="movie poster"
          />
        </div>
      </div>
    </section>
  );
};

export default Featured2;
