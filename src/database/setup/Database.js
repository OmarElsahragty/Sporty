import Sequelize from "sequelize";
import connection from "./Connection";
import * as Models from "../models";
import relationships from "./Relationships";

const Users = Models.Users(connection, Sequelize.DataTypes);

const Configurations = Models.Configurations(connection, Sequelize.DataTypes);
const Cites = Models.Cites(connection, Sequelize.DataTypes);
const Regions = Models.Regions(connection, Sequelize.DataTypes);
const Sports = Models.Sports(connection, Sequelize.DataTypes);

const Database = {
  connection,

  Users,

  Configurations,
  Cites,
  Regions,
  Sports,
};

relationships(Database);

export default Database;
