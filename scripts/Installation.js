import { error, success } from "consola";
import Database from "../src/database";
import Seeders from "./Seeders";

Database.connection
  .sync({
    force: process.env.NODE_ENV === "Rest", // ENABLED FORCE MODE ON REST
    alter: false, // DISABLED ALTER MODE
  })
  .then(async () => {
    await Seeders(Database); // SEEDING DATA

    success({
      badge: true,
      message: `Database ${
        process.env.NODE_ENV === "Rest" ? "rested" : "initialized"
      } successfully`,
    });
  })
  .catch((err) => {
    error({
      badge: true,
      message: err.message,
    });
  });
