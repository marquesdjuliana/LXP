const { Category, BlogPost } = require('../models');

const verifyFields = (requiredFields, requestBody) => {
  for (let i = 0; i < requiredFields.length; i += 1) {
    const field = requiredFields[i];
    if (!(field in requestBody) || requestBody[field].length === 0) {
      return false;
    }
  }
  return true;
};

module.exports = {
  verifyFields,
};