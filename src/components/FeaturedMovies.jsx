import React from 'react';
import '../styles/FeaturedMovies.css';

const movies = [
  {
    title: 'Inception',
    description:
      'A thief who steals corporate secrets through dream-sharing technology.',
    image:
      '	https://image.tmdb.org/t/p/original/xlaY2zyzMfkhk0HSC5VUwzoZPU1.jpg',
  },
  {
    title: 'The Dark Knight',
    description:
      'Batman faces his greatest challenge as he fights the Joker in Gotham City.',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWU_o-lnQr7Vf9pN3mV_LY3bKOgT9Saj8dnw&s',
  },
  {
    title: 'Interstellar',
    description: 'A team of explorers travel through a wormhole in space.',
    image: 'https://miro.medium.com/v2/resize:fit:1400/0*zK9VOzfpkTrhdboO',
  },
];

const FeaturedMovies = () => {
  return (
    <section className="featured-section">
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search for movies by title, genre, or actor..."
        />
        <button>🔍 Search</button>
      </div>

      <h2 className="featured-title">Featured Movies</h2>

      <div className="movie-grid">
        {movies.map((movie, index) => (
          <div className="movie-card" key={index}>
            <img src={movie.image} alt={movie.title} />
            <div className="movie-content">
              <h3>{movie.title}</h3>
              <p>{movie.description}</p>
              <button className="learn-more">Learn More</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedMovies;
