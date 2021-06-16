import { MultiMessages } from "../helpers";

export default (schema) => {
  return (req, res, next) => {
    try {
      const validatedData = schema.validateSync(req.body, {
        abortEarly: false,
        strict: false,
        stripUnknown: true,
      });
      req.body = validatedData;
      next();
    } catch (err) {
      return res.status(400).send({
        error: {
          message: MultiMessages(err.errors, req),
        },
      });
    }
  };
};
