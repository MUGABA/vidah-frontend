import http from "./httpServices";
import { apiUrl } from "../config.json";

const movieUrl = apiUrl + "/movies";

export const getAllMovies = () => {
  const movies = http.get(movieUrl);
  return movies;
};

export const deleteMovie = movieId => {
  return http.delete(movieUrl + "/" + movieId);
};

export const createMovie = movie => {
  if (movie._id) {
    const data = { ...movie };
    delete data._id;
    return http.put(movieUrl + "/" + movie._id, data);
  }
  return http.post(movieUrl, movie);
};
export const getSingleMovie = movieId => {
  return http.get(movieUrl + "/" + movieId);
};
// genres
export const getAllGenres = () => {
  return http.get(apiUrl + "/genres");
};
