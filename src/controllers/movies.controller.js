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

const getRandomMovie = async (req, res) => {
  try {
    let randomPage = Math.floor(Math.random() * 100) + 1;
    console.log(randomPage);
    let response = await fetch(
      `https://api.themoviedb.org/3/trending/all/day?api_key=${process.env.KEY_API_TMDB}&page=${randomPage}`
    );
    let data = await response.json();
    let randomIndex = Math.floor(Math.random() * data.results.length);
    res.status(200).json(data.results[randomIndex]);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Internal server error" });
  }
};

const searchMovies = async (req, res) => {
  let query = req.params.query;
  if (!query) {
    return res.status(400).json({ message: "Query is required" });
  } else {
    try {
      console.log(query);
      let response = await fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=${process.env.KEY_API_TMDB}&query=${query}`
      );
      let data = await response.json();
      res.status(200).json(data);
    } catch (err) {
      console.log(err);
      res.status(500).json({ message: "Internal server error" });
    }
  }
};

export { getMoviesPerPage, getMovieDetails, getRandomMovie, searchMovies };
