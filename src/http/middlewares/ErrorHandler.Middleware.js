import AppErrors from "../../errors";
import { MultiMessages } from "../helpers";

// eslint-disable-next-line no-unused-vars
export default (err, req, res, _) => {
  const handledError = AppErrors.errorHandler(err);

  return res.status(handledError.statusCode).send({
    error: {
      ...handledError,
      message:
        typeof handledError.message === "string"
          ? req.t(handledError.message)
          : MultiMessages(handledError.message, req),
    },
  });
};
