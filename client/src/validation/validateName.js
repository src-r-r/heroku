const Validator = require("validator");
const isEmpty = require("is-empty");

module.exports = function validatePassword(name) {
  let nameerrors = {};

  // Convert empty fields to an empty string so we can use validator functions
  name = !isEmpty(name) ? name : "";

  // Email checks
  if (Validator.isEmpty(name)) {
    nameerrors.name = "Failed name";
  }

  return {
    nameerrors,
    nameisValid: isEmpty(nameerrors)
  };
};