const Category = require("../../db/models/Category");

exports.categoriesList = async (req, res, next) => {
  try {
    const categories = await Category.find();
    res.status(200).json(categories);
  } catch (error) {
    next(error);
  }
};
exports.categoryCreate = async (req, res, next) => {
  try {
    if(req.file){
      req.body.image = `${req.protocol}://${req.get("host")}/${req.file.path} `;
    }
    const newCategory = await Category.create(req.body);
    res.status(201).json(newCategory);
  } catch (error) {
    next(error);
  }
};
