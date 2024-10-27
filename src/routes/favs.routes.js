import { Router } from "express";

/* Controller */
import {
  getFavs,
  createFav,
  deleteFav,
  updateFav,
  getFav,
} from "../controllers/favs.controller.js";

const RouterFavs = Router();

RouterFavs.get("/", getFavs);
RouterFavs.post("/", createFav);
RouterFavs.delete("/:id", deleteFav);
RouterFavs.put("/:id", updateFav);
RouterFavs.get("/:id", getFav);

export default RouterFavs;
