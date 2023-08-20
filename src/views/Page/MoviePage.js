import { useState, useEffect, Suspense } from 'react';
import { Outlet, Link, useParams, useLocation } from 'react-router-dom';
import LoaderSpinner from '../../components/Loader/Loader';
import MovieDetails from '../../components/MovieDetails/MovieDetails';
import * as fetchAPI from '../../API/MoviesApi';
import styles from '../Page/MoviePage.module.css';
import { ButtonLinkStyled } from './Btn.styled';

export default function MoviePage() {
  // const navigate = useNavigate();
  const location = useLocation();
  const [movie, setMovie] = useState(null);
  const { movieId } = useParams();
  // const { url } = useMatch();
  useEffect(() => {
    fetchAPI.fetchMoviesId(movieId).then(setMovie);
  }, [movieId]);

  // const goBack = () => {
  //   navigate({
  //     pathname: location.state.from.search || '/movies',
  //     search: location.state?.searchValue || '',
  //   });
  // };

  return (
    <>
      <ButtonLinkStyled
        to={location?.state?.from ?? '/'}
        type="button"
        className={styles.button}
      >
        Go back
      </ButtonLinkStyled>
      {movie && (
        <>
          <div className={styles.wrapper}>
            <MovieDetails movie={movie} />
            <h4 className={styles.addTitle}>Additional information:</h4>
            <Link
              to={{
                pathname: `/movies/${movieId}/cast`,
              }}
              state={{ from: location.state?.from }}
              className={styles.link}
            >
              Cast
            </Link>
            <Link
              to={{
                pathname: `/movies/${movieId}/reviews`,
              }}
              state={{ from: location.state?.from }}
              className={styles.link}
            >
              Reviews
            </Link>
            <Suspense fallback={<LoaderSpinner />}>
              <Outlet />
            </Suspense>
          </div>
        </>
      )}
    </>
  );
}
