import styles from '../MovieDetails/MovieDetails.module.css';

export default function MovieDetails({ movie }) {
  return (
    <div className={styles.wrapper}>
      <img
        src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
        alt={movie.original_title}
        width="300"
        className={styles.image}
      />
      <div className={styles.movieInfo}>
        <h2 className={styles.movieTitle}>{movie.original_title}</h2>
        <p className={styles.movieItem}>
          User score:
          <span className={styles.voteSum}>{movie.vote_average}</span>
        </p>
        <p className={styles.infoItem}>
          Overview:<span className={styles.infoSum}>{movie.overview}</span>
        </p>
        <p className={styles.infoItem}>
          Genres:
          <span className={styles.infoSum}>
            {movie.genres.map(genre => genre.name).join('/')}
          </span>
        </p>
      </div>
    </div>
  );
}
