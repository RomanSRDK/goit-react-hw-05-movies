import axios from 'axios';
const API_KEY = '74df5c4b3da0f8bb23d044877e91bb86';
const API_URL_SEARCH = 'https://api.themoviedb.org/3/';

export function fetchTrendsMovies(timePeriod = 'week', page = '1') {
  return axios
    .get(
      `${API_URL_SEARCH}trending/movie/${timePeriod}?api_key=${API_KEY}&page=${page}`
    )
    .then(({ data }) => data)
    .catch(error => error);
}

export function fetchSearchMovies(searchInput) {
  return axios
    .get(
      `${API_URL_SEARCH}search/movie?api_key=${API_KEY}&language=en-US&&page=1&include_adult=false&query=${searchInput}`
    )
    .then(({ data }) => data)
    .catch(error => error);
}

export function fetchMoviesId(movieId) {
  return axios
    .get(`${API_URL_SEARCH}movie/${movieId}?api_key=${API_KEY}&language=en-US`)
    .then(({ data }) => data)
    .catch(error => error);
}

export function fetchCast(movieId) {
  return axios
    .get(
      `${API_URL_SEARCH}movie/${movieId}/credits?api_key=${API_KEY}&language=en-US`
    )
    .then(({ data }) => data.cast)
    .catch(error => error);
}

export function fetchMoviesByReviews(movieId) {
  return axios
    .get(
      `${API_URL_SEARCH}movie/${movieId}/reviews?api_key=${API_KEY}&language=en-US&page=1`
    )
    .then(({ data }) => data.results)
    .catch(error => error);
}
