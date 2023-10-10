const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const userRoute = require("./routes/user.js");

const app = express();
app.use(bodyParser.json({ limit: "50mb" }));
app.use(cors());
app.use(express.json());

dotenv.config();
// Connect to database
mongoose.connect(process.env.MONGODB_URL);

// Routes
app.use("/", userRoute);

app.listen(3002, () => {
  console.log("Server connect successfully !!!");
});
