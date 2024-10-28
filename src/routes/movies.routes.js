import { Router } from "express";

/* Controller */
import {
  getMoviesPerPage,
  getMovieDetails,
  getRandomMovie,
  searchMovies,
} from "../controllers/movies.controller.js";

const RouterMovies = Router();

RouterMovies.get("/:page", getMoviesPerPage);
RouterMovies.get("/details/:id", getMovieDetails);
RouterMovies.get("/random", getRandomMovie);
RouterMovies.get("/search/:query", searchMovies);

export default RouterMovies;
