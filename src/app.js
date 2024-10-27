import express from "express";
import dotenv from "dotenv";
import morgan from "morgan";

/* Routers */
import RouterFavs from "./routes/favs.routes.js";
import RouterMovies from "./routes/movies.routes.js";

dotenv.config();
const App = express();

App.use(express.json());
App.use(morgan("dev"));

App.use("/favs", RouterFavs);
App.use("/movies", RouterMovies);

export default App;
