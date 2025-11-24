import express from "express";
import dotenv from "dotenv";
dotenv.config();

const app = express();

app.get("/", (req, res) => {
  res.status(200).json({ msg: "test" });
});

const port = process.env.PORT || 5000;
const environment = process.env.NODE_ENV;
app.listen(port, () => {
  console.log(`Server Is running on ${environment} with port ${port} `);
});
