const express = require("express");
const cors = require("cors");
const UserRoutes = require("./api/users/users.routes");
const connectDB = require("./db/database");
const categoriesRoutes = require("./api/category/category.routes");
const app = express();
const port = 5001;

//middleware
app.use(cors());
app.use(express.json());

//routes
app.use("/api/users", UserRoutes);
app.use("/api/categories", categoriesRoutes);

//connect to db
connectDB();

//listen
app.listen(port, () => {
  console.log(`The application is running on localhost:${port}`);
});
