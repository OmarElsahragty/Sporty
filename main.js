import { DatabaseConnection } from "./src/database";
import Server from "./src/http/server";
import Config from "./config";

export default () => {
  DatabaseConnection.authenticate()
    .then(() => {
      console.success(
        `Successfully connected to ${Config.Database.Name} database`
      );

      new Server(Config.Port).start();
    })
    .catch((error) => console.error(error.message));
};
