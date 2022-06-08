const express = require("express");
const router = express.Router();
const { categoriesGet } = require("./category.controllers");

router.get("/", categoriesGet);

module.exports = router;
