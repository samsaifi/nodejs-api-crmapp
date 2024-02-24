const Joi = require("joi");

const { Users } = require("../models");

userRegistration = async (req, res, next) => {
  const schema = Joi.object({
    name: Joi.string().required(),
    email: Joi.string().email().required(),
    password: Joi.string().required(),
    status: Joi.boolean().required(),
  });
  console.log(req.body);
  const { error } = schema.validate(req.body);
  if (error) {
    return res.status(400).json({ error: error.details[0].message });
  }
  const emailCheck = await checkUserEmailExits(req.body.email);
  if (emailCheck) {
    return res.status(400).json({ error: "Email id already exits" });
  }
  console.log("validation passed");

  next();
};
userLoginValidation = async (req, res, next) => {
  const schema = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().min(8).required(),
  });

  const { error } = schema.validate(req.body);
  if (error) {
    return res.status(400).json({ error: error.details[0].message });
  }

  next();
};
userForgetPassword = async (req, res, next) => {
  const schema = Joi.object({
    email: Joi.string().email().required(),
  });

  const { error } = schema.validate(req.body);
  if (error) {
    return res.status(400).json({ error: error.details[0].message });
  }

  next();
};

checkUserEmailExits = async (email) => {
  const user = await Users.findOne({ email });
  return user;
};

module.exports = {
  userRegistration,
  userLoginValidation,
  userForgetPassword,
  checkUserEmailExits,
};
