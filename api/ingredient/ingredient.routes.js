const express = require("express");

//controllers
const { ingredientsList, ingredientCreate } = require("./ingredient.controllers");

const router = express.Router();

router.get("/", ingredientsList);
router.post("/", ingredientCreate);

module.exports = router;
