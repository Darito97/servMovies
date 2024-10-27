import fetch from "node-fetch";

const getMoviesPerPage = async (req, res) => {
  let page = req.params.page;
  if (!page) {
    return res.status(400).json({ message: "Page is required" });
  } else {
    try {
      let response = await fetch(
        `https://api.themoviedb.org/3/trending/all/day?api_key=${process.env.KEY_API_TMDB}&page=${page}`
      );
      let data = await response.json();
      res.status(200).json(data);
    } catch (err) {
      console.log(err);
      res.status(500).json({ message: "Internal server error" });
    }
  }
};

const getMovieDetails = async (req, res) => {
  let id = req.params.id;
  if (!id) {
    return res.status(400).json({ message: "Id is required" });
  } else {
    try {
      let response = await fetch(
        `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.KEY_API_TMDB}`
      );
      let data = await response.json();
      res.status(200).json(data);
    } catch (err) {
      console.log(err);
      res.status(500).json({ message: "Internal server error" });
    }
  }
};

export { getMoviesPerPage, getMovieDetails };