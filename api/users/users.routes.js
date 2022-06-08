const express = require("express");
const router = express.Router();
const { signup } = require("./users.controllers");

router.get("/", signup);

module.exports = router;
