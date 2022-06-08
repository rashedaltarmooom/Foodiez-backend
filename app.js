const express = require("express");
const cors = require("cors");
const signup = require("./api/users/users.routes");
const connectDB = require("./db/database");
const categoriesRoutes = require("./api/category/category.routes");
const app = express();

//middleware
app.use(cors());
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
