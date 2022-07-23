import express from "express";
import data from "./data/mock.json" assert { type: "json" };

const app = express();
const PORT = 3000;

app.use(express.static("public"));

app.use("/images", express.static("images"));

app.get(
  "/next",
  (req, res, next) => {
    console.log("going next .apply.call.");
    next();
  },
  (req, res) => {
    res.send("Called after next");
  }
);

app.get("/", (req, res) => {
  res.json(data);
});

app.route("/class/:id").get((req, res) => {
  const studentId = Number(req.params.id);

  const student = data.filter((student) => student.id == studentId);
  res.send(student);
});

app.listen(PORT, () => {
  console.log(`The server is running on localhost:${PORT}`);
});
