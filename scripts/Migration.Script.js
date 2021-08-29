import Database, { DatabaseSeeds } from "../src/infrastructure/database";
import "../TerminalColors";

Database.connection
  .sync({
    force: process.env.NODE_ENV === "Rest", // ENABLED FORCE MODE ON REST
    alter: false,
  })
  .then(async () => {
    await DatabaseSeeds(Database);

    // eslint-disable-next-line no-console
    console.log(
      `Database ${
        process.env.NODE_ENV === "Rest" ? "rested" : "initialized"
      } successfully`.success
    );
  })
  .catch((error) => console.error(`${error.message}`.error));
