const express = require("express");

//controllers
const { categoriesList } = require("./category.controllers");

const router = express.Router();

router.get("/", categoriesList);

module.exports = router;
