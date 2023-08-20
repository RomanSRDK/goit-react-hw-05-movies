import PageHeading from '../components/PageHeading/PageHeading';
import { useState, useEffect } from 'react';
import * as fetchIP from '../API/MoviesApi';
import MoviesGallery from '../components/MoviesGallery/MoviesGallery';

export default function HomePage() {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    fetchIP.fetchTrendsMovies().then(({ results }) => setMovies(results));
  }, []);
  return (
    <>
      <PageHeading text="Trending movies" />
      {movies && <MoviesGallery movies={movies} />}
    </>
  );
}
