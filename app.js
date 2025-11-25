import express from "express";
import dotenv from "dotenv";
dotenv.config();
import bookRouter from "./Routes/books.js";

const app = express();

app.use(express.json());

app.use("/api/books", bookRouter);

const port = process.env.PORT || 5000;
const environment = process.env.NODE_ENV;
app.listen(port, () => {
  console.log(`Server Is running on ${environment} with port ${port} `);
});
