const { Schema, model } = require("mongoose");

const CategorySchema = new Schema({
  name: {
    type: String,
    required: [true, "Name is required"],
    unique: true,
  },
  image: String,
});

module.exports = model("Category", CategorySchema);
