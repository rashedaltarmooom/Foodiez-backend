const express = require("express");
const cors = require("cors");
const signup = require("./api/users/users.routes");
const connectDB = require("./db/database");
const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/users", signup);

connectDB();

app.listen(8000, () => {
  console.log("The application is running on localhost:8000");
});
