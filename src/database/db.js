import mongoose from "mongoose";

const MONGO_URI = process.env.MONGO_URI;
const ConnectDB = async () => {
  try {
    await mongoose.connect(MONGO_URI);
    console.log("Connected to MongoDB");
  } catch (err) {
    console.log(err);
  }
};

export default ConnectDB;
