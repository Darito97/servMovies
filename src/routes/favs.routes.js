import { Router } from "express";

const RouterFavs = Router();

RouterFavs.get("/", (req, res) => {});
RouterFavs.post("/", (req, res) => {});
RouterFavs.delete("/:id", (req, res) => {});
RouterFavs.put("/:id", (req, res) => {});
RouterFavs.get("/:id", (req, res) => {});

export default RouterFavs;
