import mongoose from "mongoose";

const connectToDatabase = async () => {
  // Local
  // try {
  //   await mongoose.connect(process.env.MONGODB_URI as string);
  //   console.log("Connected to database");
  // } catch (error) {
  //   console.log("Failed to connect to database");
  //   console.error(error);
  // }

  // Atlas
  try {
    if (mongoose.connection.readyState === 1) {
      console.log("Already connected");
      return;
    }

    await mongoose.connect(process.env.MONGODB_URI as string, {
      dbName: "nikahan",
    });

    console.log("=====Connected to MongoDB Atlas=====");
  } catch (error) {
    console.error("Failed to connect to MongoDB Atlas:", error);
    process.exit(1);
  }
};

export default connectToDatabase;