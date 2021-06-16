import { BaseError, ValidationError, DatabaseError } from "sequelize";
import { SERVER_ERROR } from "./constants";

class SequelizeDatabaseErrors {
  isDatabaseError(err) {
    return err instanceof BaseError;
  }

  isAppDatabaseError(err) {
    return err instanceof DatabaseError;
  }

  isValidationError(err) {
    return err instanceof ValidationError;
  }

  handleAppDatabaseError(err) {
    console.error(`ERROR: Database Error while performing query: ${err.sql}`);
    console.error(`Original Error: ${err}`);
    return SERVER_ERROR;
  }

  handleValidationError(err) {
    this.message = err.errors.map(
      (validationErrItem) => validationErrItem.message
    );
    return {
      statusCode: 422,
      error: "Bad Data",
      message: this.message,
    };
  }

  handleError(err) {
    if (this.isValidationError(err)) return this.handleValidationError(err);
    if (this.isAppDatabaseError(err)) return this.handleAppDatabaseError(err);

    console.error({ SERVER_ERROR: err });
    return SERVER_ERROR;
  }
}

export default SequelizeDatabaseErrors;
