import express from "express";
import "dotenv/config";
const app = express();

app.use(express.static("./public"));

app.get("/", (req, res) => {
  res.send("hello world from express + node");
});

app.listen(process.env.PORT || 4000, () => {
  console.log("server is running on port " + process.env.PORT || 4000);
});
