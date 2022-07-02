const joi = require("joi");

const registerSchema = joi.object({
  firstName: joi.string().required(),
  lastName: joi.string().required(),
  email: joi.string().email().required(),
  password: joi.string().required(),
  birthDate: joi.date().required(),
  location: joi
    .object()
    .keys({
      countryCode: joi.number().required(),
      cityCode: joi.number().required(),
    })
    .required(),
});

const loginSchema = joi.object({
  email: joi.string().email().required(),
  password: joi.string().required(),
});

module.exports = {
  registerSchema,
  loginSchema,
};
