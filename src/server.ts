import express from "express";
import cors from "cors"
import { sequelize } from "./database";
import { adminJS, adminJSRouter } from "./adminjs";
import { router } from "./routes";
import dotenv from "dotenv"

dotenv.config();

const app = express();

app.use(cors())

app.use(express.json())

app.use(express.static("public"));

app.use(adminJS.options.rootPath, adminJSRouter);

app.use(router);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  sequelize.authenticate().then(() => {
    console.log("Database connected successfully!");
  });
  console.log(`Server started successfuly at port ${PORT}`);
});
