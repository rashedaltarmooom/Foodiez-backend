const express = require("express");
const upload = require("../../middleware/multer")

//controllers
const { categoriesList, categoryCreate } = require("./category.controllers");

const router = express.Router();

router.get("/", categoriesList);
router.post("/",upload.single("image"), categoryCreate);

module.exports = router;
