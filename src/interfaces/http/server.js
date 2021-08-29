import cors from "cors";
import express from "express";
import { usersRoutes, systemRoutes, groupsRoutes } from "./routes";
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
    this.app.use("/", systemRoutes);
    this.app.use("/", groupsRoutes);

    this.app.use(ErrorHandler);
  }

  start() {
    this.app.listen(this.port, () => {
      // eslint-disable-next-line no-console
      console.log(`Server has started on port: ${this.port}`.success);
    });
  }
}

export default Server;
