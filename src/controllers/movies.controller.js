import fetch from "node-fetch";

const getMoviesPerPage = async (req, res) => {
  let page = req.params.page;
  if (!page) {
    return res.status(400).json({ message: "Page is required" });
  } else {
    try {
      let response = await fetch(
        `https://api.themoviedb.org/3/trending/all/day?api_key=1396cac43cd50c39f4bc5907119e7e0e&page=${page}`
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
        `https://api.themoviedb.org/3/movie/${id}?api_key=1396cac43cd50c39f4bc5907119e7e0e`
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
