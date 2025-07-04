import mongoose from "mongoose";
import app from "./app";
import config from "./config";

const main = async () => {
  try {
    await mongoose.connect(config.database_url as string);

    app.listen(config.port, () => {
      console.log(`✅ Databse listening on port ${config.port}`);
    });
  } catch (error) {
    console.log(error);
  }
};

main();
