import BoomHttpErrors from "./Boom.Errors";
import SequelizeDatabaseErrors from "./Sequelize.Error";
import { SERVER_ERROR } from "./constants";

class AppErrors {
  constructor() {
    this.http = new BoomHttpErrors();
    this.db = new SequelizeDatabaseErrors();
  }

  __handleHttpError(err) {
    if (err.isServer) {
      console.error({ SERVER_ERROR: err });
      return SERVER_ERROR;
    } else return err.output.payload;
  }

  __handleUnknownError(err) {
    console.error({ UNKNOWN_ERROR: err });
    return SERVER_ERROR;
  }

  errorHandler(err) {
    if (this.http.isHttpError(err)) return this.http.handleError(err);
    if (this.db.isDatabaseError(err)) return this.db.handleError(err);
    return this.__handleUnknownError(err);
  }
}

export default new AppErrors();
