const { Schema, model } = require("mongoose");

const IngredientSchema = new Schema({
  name: {
    type: String,
    required: [true, "Name is required"],
    unique: true,
  },
});

module.exports = model("Ingredient", IngredientSchema);
