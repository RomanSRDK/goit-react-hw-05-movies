import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { useSearchParams } from 'react-router-dom';
import * as fetchAPI from '../../API/MoviesApi';
import SearchMovies from '../../components/SearchMovies/SearchMovies';
import MoviesGallery from 'components/MoviesGallery/MoviesGallery';
import styles from '../../components/SearchMovies/Searchbar.module.css';

export default function PageSearch() {
  const [movies, setMovies] = useState(null);
  const [searchParam, setSearchParams] = useSearchParams();
  const [query, setQuery] = useState(() => searchParam.get('query') ?? '');

  useEffect(() => {
    query && getMovies();
  });

  const getMovies = () => {
    fetchAPI.fetchSearchMovies(query).then(({ results }) => {
      if (results.length === 0) {
        toast.error(`There are no results found. Please try another request`);
        return;
      }
      setMovies(results);
    });
  };

  const onSubmit = query => {
    setQuery(query);
    setMovies([]);
    setSearchParams({ query });
  };

  return (
    <>
      <SearchMovies onSubmit={onSubmit} className={styles.searchbar} />
      {movies && <MoviesGallery movies={movies} data={movies} />}
    </>
  );
}
