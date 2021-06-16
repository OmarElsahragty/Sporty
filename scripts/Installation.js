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
      name: "sahragty",
      picture:
        "https://scontent.fcai21-4.fna.fbcdn.net/v/t1.6435-9/182210446_10215936340520845_4571258665026078010_n.jpg?_nc_cat=111&ccb=1-3&_nc_sid=09cbfe&_nc_eui2=AeEGYtSKETLr9CmslJWix0uw3O9aGB_5eoPc71oYH_l6gy1GdhIeTNqRVruN_AlhEgw&_nc_ohc=UI0kx564pzAAX_PRipg&_nc_oc=AQk8jgiOH3bIVPk-BOuRC_WgDDwxOdezaHmdHfcjv5ausb7SuWHM01ZymjAdn9AB0P8&_nc_ht=scontent.fcai21-4.fna&oh=320ee4f7ec3194bd1a2d42a184158257&oe=60CF5636",
      gender: "M",
      dateOfBirth: "1997-02-13",
      phone: "+201114057736",
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
