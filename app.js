const express = require("express");
//middleware
const cors = require("cors");
const UserRoutes = require("./api/users/users.routes");
const morgan = require("morgan");
const errorHandling = require("./middleware/errorHandling");
const pathNotFound = require("./middleware/pathNotFound");

//db
const connectDB = require("./db/database");
//routes
const categoriesRoutes = require("./api/category/category.routes");

const app = express();
const port = 5001;

//middleware
app.use(cors());
app.use(morgan(":method :url :status ")); //logger middleware
app.use(express.json());


//routes
app.use("/api/users", UserRoutes);
app.use("/api/categories", categoriesRoutes);

//connect to db
connectDB();

//Error handling middleware and Path not found
app.use(errorHandling);
app.use(pathNotFound);

//listen
app.listen(port, () => {
  console.log(`The application is running on localhost:${port}`);
});
