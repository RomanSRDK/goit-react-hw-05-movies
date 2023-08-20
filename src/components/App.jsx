import { Route, Routes } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import LoaderSpinner from './Loader/Loader';
import AppBar from './AppBar/AppBar';
import Container from './Container/Container';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import styles from '../components/App.module.css';
import Cast from './Cast/Cast';
import Reviews from './Reviews/Reviews';

const HomePage = lazy(() => import('../views/HomePage'));
const PageSearch = lazy(() => import('../views/PageSearch/PageSearch'));
const Moviepage = lazy(() => import('../views/Page/MoviePage'));
const NotFound = lazy(() => import('../views/Page/NotFound'));

export default function App() {
  return (
    <Container>
      <AppBar className={styles.header} />
      <Suspense fallback={<LoaderSpinner />}>
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/movies" element={<PageSearch />}></Route>
          <Route path="/movies/:movieId" element={<Moviepage />}>
            <Route path="Cast" element={<Cast />} />
            <Route path="Reviews" element={<Reviews />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
      <ToastContainer
        autoClose={3000}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </Container>
  );
}
