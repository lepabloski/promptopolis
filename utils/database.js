import mongoose from "mongoose";

let isConnected = false;

export const connectDB = async () => {
  mongoose.set("strictQuery", true);

  if (isConnected) {
    // singleton
    console.log("mongobd esta conectada");
    return;
  }

  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      dbName: "sharePrompt",
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    isConnected = true;
  } catch (error) {
    console.log(error);
  }
};
