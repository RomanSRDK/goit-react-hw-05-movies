import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import * as fetchAPI from '../../API/MoviesApi';
import styles from '../Reviews/Reviews.module.css';

export default function Reviews() {
  const [results, setReviews] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    fetchAPI.fetchMoviesByReviews(movieId).then(setReviews);
  }, [movieId]);

  return (
    <>
      <ul>
        {results && results.length > 0 ? (
          results.map(result => (
            <li key={result.id} className={styles.reviewCard}>
              <div className={styles.imagesSection}>
                <b>{result.author}:</b>
                <p>{result.content}</p>
              </div>
            </li>
          ))
        ) : (
          <b>No reviews yet!</b>
        )}
      </ul>
    </>
  );
}
