const bcrypt = require("bcrypt");
const User = require("../../models/User");

exports.signup = async (req, res) => {
  try {
    const hashPassword = await bcrypt.hash(req.body.password, 5);
    req.body.password = hashPassword;
    const newUser = await User.create(req.body);
    const payload = {
      _id: newUser._id,
      username: newUser.username,
      urls: newUser.urls,
      expires: Date.now() + keys.JWT_EXPIRATION_MS,
    };
    const token = jwt.sign(payload, keys.JWT_SECRET);
    res.status(201).json(token);
  } catch (err) {
    res.status(500).json("Server Error");
  }
};
