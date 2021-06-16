import cors from "cors";
import express from "express";
import { usersRoutes } from "./routes";
import { I18next, ErrorHandler } from "./middlewares";

class Server {
  constructor(port) {
    this.port = port;
    this.app = express();
    this.setup();
  }

  setup() {
    this.app
      .use(cors())
      .use(I18next)
      .use(express.json())
      .disable("x-powered-by");

    this.app.use("/", usersRoutes);

    this.app.use(ErrorHandler);
  }

  start() {
    this.app.listen(this.port, () => {
      console.success(`Server has started on port: ${this.port}`);
    });
  }
}

export default Server;
