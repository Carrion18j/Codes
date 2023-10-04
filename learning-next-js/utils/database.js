import mongoose from "mongoose";

let isConnecter = false;

export const connectToDB = async () => {
  mongoose.set("strictQuery", true);

  if (isConnecter) {
    console.log("MongoDb is already connected");
    return;
  }

  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      dbName: "share_prompt",
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    isConnecter = true;

    console.log("MongoDb is connected");
  } catch (err) {
    console.log(err);
  }
};
