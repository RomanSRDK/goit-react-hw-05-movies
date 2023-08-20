import { useState, useEffect } from 'react';
import * as fetchAPI from '../../API/MoviesApi';
import styles from '../Cast/Cast.module.css';
import { useParams } from 'react-router-dom';

// import photo from '../../images/NotFound.png';
export default function Cast() {
  const [cast, setCast] = useState([]);
  const { movieId } = useParams();
  useEffect(() => {
    fetchAPI.fetchCast(movieId).then(setCast);
  }, [movieId]);
  return (
    <ul className={styles.cast}>
      {cast && cast.length > 0 ? (
        cast.map(({ id, profile_path, name, character }) => (
          <li key={id} className={styles.Castitem}>
            <img
              src={
                profile_path
                  ? `https://image.tmdb.org/t/p/w300${profile_path}`
                  : `https://i.gifer.com/origin/3f/3fcf565ccc553afcfd89858c97304705.gif`
              }
              alt={name}
              className={styles.Castphoto}
            />
            <p className={styles.Castname}>{name}</p>
            <p className={styles.Moviecharacter}>{character}</p>
          </li>
        ))
      ) : (
        <b>Nothing was found!</b>
      )}
    </ul>
  );
}
