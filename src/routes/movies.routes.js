import { Router } from "express";

/* Controller */
import {
  getMoviesPerPage,
  getMovieDetails,
} from "../controllers/movies.controller.js";

const RouterMovies = Router();

RouterMovies.get("/:page", getMoviesPerPage);
RouterMovies.get("/details/:id", getMovieDetails);

export default RouterMovies;
