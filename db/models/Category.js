const { Schema, model } = require("mongoose");

const CategorySchema = new Schema({
  name: String,
  image: String,
});

module.exports = model("Category", CategorySchema);
