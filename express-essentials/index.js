import express from "express";
import data from "./data/mock.json" assert { type: "json" };

const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
  res.json(data);
});

app.listen(PORT, () => {
  console.log(`The server is running on localhost:${PORT}`);
});
