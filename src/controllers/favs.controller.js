import Fav from "../models/favs.js";

const getFavs = async (req, res) => {
  try {
    const favs = await Fav.find();
    res.status(200).json(favs);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Internal server error" });
  }
};

const createFav = async (req, res) => {
  try {
    const fav = new Fav(req.body);
    await fav.save();
    res.status(201).json(fav);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Internal server error" });
  }
};

const deleteFav = async (req, res) => {
  try {
    let id = req.params.id;
    if (!id) {
      return res.status(400).json({ message: "Id is required" });
    } else {
      const fav = await Fav.findByIdAndDelete(id);
      if (!fav) {
        return res.status(404).json({ message: "Fav not found" });
      }
      res.status(200).json({ message: "Fav deleted" });
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Internal server error" });
  }
};

const updateFav = async (req, res) => {
  try {
    let id = req.params.id;
    if (!id) {
      return res.status(400).json({ message: "Id is required" });
    } else {
      const fav = await Fav.findByIdAndUpdate(id, req.body);
      if (!fav) {
        return res.status(404).json({ message: "Fav not found" });
      } else {
        res.status(200).json({ message: "Fav updated" });
      }
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Internal server error" });
  }
};

const getFav = async (req, res) => {
  try {
    let id = req.params.id;
    if (!id) {
      return res.status(400).json({ message: "Id is required" });
    } else {
      const fav = await Fav.findById(id);
      if (!fav) {
        return res.status(404).json({ message: "Fav not found" });
      }
      res.status(200).json(fav);
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Internal server error" });
  }
};

export { getFavs, createFav, deleteFav, updateFav, getFav };
