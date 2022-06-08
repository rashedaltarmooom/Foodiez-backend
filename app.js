const express = require("express");
const cors = require("cors");
const connectDB = require("./db/database");
const categoriesRoutes = require("./api/category/category.routes");
const app = express();

//middleware
app.use(cors());
app.use(express.json());

//routes
app.use("/api/categories", categoriesRoutes);

//connect to db
connectDB();

//listen
app.listen(8000, () => {
  console.log("The application is running on localhost:8000");
});
