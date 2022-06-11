const express = require("express");

//controllers
const { categoriesList, categoryCreate } = require("./category.controllers");

const router = express.Router();

router.get("/", categoriesList);
router.post("/", categoryCreate);

module.exports = router;
