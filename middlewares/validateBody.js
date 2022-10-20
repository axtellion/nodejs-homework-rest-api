const { RequestError } = require("../helpers");

const validateBody = (schema) => {
  const func = (req, res, next) => {
    const { error } = schema.validate(req.body);
    if (error) {
      next(
        RequestError(
          400,
          req.method === "POST"
            ? (error.message = "missing required name field")
            : (error.message = "missing fields")
        )
      );
    }
    next();
  };

  return func;
};

module.exports = validateBody;
