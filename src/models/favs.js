import mongoose from "mongoose";

const favSchema = new mongoose.Schema({
  userId: {
    type: String,
    required: true,
  },
  favs: {
    type: Array,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

const Fav = mongoose.model("Fav", favSchema);

export default Fav;
