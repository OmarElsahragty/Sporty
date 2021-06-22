import { error, success } from "consola";
import Database from "../src/database";
// import DummyData from "./DummyData"; // CREATING DUMMY DATA FOR DEVELOPMENT

Database.connection
  .sync({
    force: process.env.NODE_ENV === "Rest", // ENABLED FORCE MODE ON REST
    alter: false, // DISABLED ALTER MODE
  })
  .then(async () => {
    // ==========================================================================
    //                          USERS
    // ==========================================================================
    await Database.Users.create({
      firstName: "Omar",
      lastName: "Elsahragty",
      picture: "",
      gender: "M",
      dateOfBirth: "1997-02-13",
      email: "omar_elsahragty@hotmail.com",
      password: "$2a$10$yQeb44ZCO1Z8x5ncPv5hh.DekQH8EuZSPfnFnlrf2380o.ovalVHm", // Password123
      isAdmin: true,
    });

    // await DummyData(Database); // CREATING DUMMY DATA FOR DEVELOPMENT

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
