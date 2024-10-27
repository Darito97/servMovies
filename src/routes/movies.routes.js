import { Router } from "express";

/* Controller */
import {
  getMoviesPerPage,
  getMovieDetails,
  getRandomMovie,
} from "../controllers/movies.controller.js";

const RouterMovies = Router();

RouterMovies.get("/:page", getMoviesPerPage);
RouterMovies.get("/details/:id", getMovieDetails);
RouterMovies.get("/random", getRandomMovie);

export default RouterMovies;
