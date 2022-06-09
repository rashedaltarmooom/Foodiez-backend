const express = require("express");
//middleware
const cors = require("cors");
const morgan = require("morgan");

//db
const connectDB = require("./db/database");
//routes
const categoriesRoutes = require("./api/category/category.routes");
const signup = require("./api/users/users.routes");
const app = express();

//middleware
app.use(cors());
app.use(morgan(":method :url :status ")); //logger middleware
app.use(express.json());

app.use("/api/users", signup);

//routes
app.use("/api/categories", categoriesRoutes);

//connect to db
connectDB();

//listen
app.listen(8000, () => {
  console.log("The application is running on localhost:8000");
});
