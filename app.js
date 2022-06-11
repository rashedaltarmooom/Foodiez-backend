const express = require("express");
//middleware
const cors = require("cors");
const morgan = require("morgan");
const errorHandling = require("./middleware/errorHandling");
const pathNotFound = require("./middleware/pathNotFound");

//db
const connectDB = require("./db/database");
//routes
const categoriesRoutes = require("./api/category/category.routes");
// const signup = require("./api/users/users.routes");
const app = express();

//middleware
app.use(cors());
app.use(morgan(":method :url :status ")); //logger middleware
app.use(express.json());

// app.use("/api/users", signup);

//routes
app.use("/api/categories", categoriesRoutes);

//connect to db
connectDB();

//Error handling middleware and Path not found
app.use(errorHandling);
app.use(pathNotFound);

//listen
app.listen(8000, () => {
  console.log("The application is running on localhost:8000");
});
