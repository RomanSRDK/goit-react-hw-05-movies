import React from 'react';
import MoviesGalleryItem from './MoviesGalleryItem';
import styles from '../MoviesGallery/MoviesGallery.module.css';
import PropTypes from 'prop-types';

export default function MoviesGallery({ movies }) {
  return (
    <div className={styles.MoviesGallery}>
      <ul className={styles.MoviesGalleryList}>
        {movies.map(movie => (
          <MoviesGalleryItem movie={movie} key={movie.id} />
        ))}
      </ul>
    </div>
  );
}

MoviesGallery.propTypes = {
  movies: PropTypes.array.isRequired,
};
