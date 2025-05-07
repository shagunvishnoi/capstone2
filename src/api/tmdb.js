const API_KEY = 'https://www.themoviedb.org/documentation/api'; // replace this with your actual key
const BASE_URL = 'https://api.themoviedb.org/3';

export const fetchPopularMovies = async () => {
  const response = await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}&language=en-US&page=1`);
  const data = await response.json();
  return data.results.slice(0, 6); // get top 6 movies
};
