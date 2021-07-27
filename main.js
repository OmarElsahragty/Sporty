import { DatabaseConnection } from "./src/database";
import Server from "./src/http/server";
import Config from "./config";

export default () => {
  DatabaseConnection.authenticate()
    .then(() => {
      // eslint-disable-next-line no-console
      console.log(
        `Successfully connected to ${Config.Database.Name} database`.success
      );

      new Server(Config.Port).start();
    })
    .catch((error) => console.error(`${error.message}`.error));
};
