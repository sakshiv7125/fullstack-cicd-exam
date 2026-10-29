const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URL || "mongodb://localhost:27017/fullstackdb")
.then(() => console.log("MongoDB Connected"))
.catch(err => console.log(err));

app.get("/api", (req, res) => {
  res.json({ message: "Full Stack CI/CD Working!" });
});

app.listen(5000, "0.0.0.0", () => {
  console.log("Backend running on port 5000");
});