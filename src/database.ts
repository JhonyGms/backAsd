import mongoose from "mongoose";
import config from "./config/config";

mongoose.connect(config.DB.URI);

const conection = mongoose.connection;

conection.once("open", () => {
  console.log("Mongodb connection stablished");
});

conection.on("eror", (err) => {
  console.log(err);
  process.exit(0);
});
