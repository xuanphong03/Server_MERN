const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const path = require("path");
const UserModel = require(path.join(__dirname, "models", "Users"));
// const UserModel = require("./models/Users");

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect("mongodb://127.0.0.1:27017/crud");

app.post("/create", (req, res) => {
  UserModel.create(req.body)
    .then((users) => res.json(users))
    .catch((err) => {
      console.error("Error creating user:", err);
      res
        .status(500)
        .json({ error: "An error occurred while creating the user." });
    });
});

app.put("/update/:id", (req, res) => {
  const id = req.params.id;
  UserModel.findByIdAndUpdate(
    { _id: id },
    {
      name: req.body.name,
      email: req.body.email,
      phoneNumber: req.body.phoneNumber,
      address: req.body.address,
    }
  )
    .then((users) => res.json(users))
    .catch((err) => res.json(err));
});

app.delete("/deleteUser/:id", (req, res) => {
  const id = req.params.id;
  UserModel.findByIdAndDelete({ _id: id })
    .then((res) => res.json(res))
    .catch((err) => console.log(err));
});

app.get("/getUser/:id", (req, res) => {
  const id = req.params.id;
  UserModel.findById({ _id: id })
    .then((users) => res.json(users))
    .catch((err) => console.log(err));
});

app.get("/", (req, res) => {
  UserModel.find({})
    .then((users) => res.json(users))
    .catch((err) => console.log(err));
});

app.listen(3002, () => {
  console.log("Server connect successfully !!!");
});
