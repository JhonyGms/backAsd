import express from "express";
import * as dotenv from "dotenv";
import entity from "./routes/entity";
import "./database";

export const app = express();

dotenv.config();

app.use(express.json());

const PORT = process.env.PORT || 3000;

app.use("/api/test-soyyo", entity);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
