import LocaleKeys from "../../app/locales";

export default (connection, DataTypes) =>
  connection.define(
    "Users",
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING(35),
        allowNull: false,
      },
      picture: {
        type: DataTypes.STRING(1024),
        allowNull: true,
      },
      gender: {
        type: DataTypes.ENUM("M", "F"),
        allowNull: false,
      },
      dateOfBirth: {
        type: DataTypes.DATEONLY,
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING(255),
        allowNull: false,
        unique: {
          args: true,
          msg: LocaleKeys.USED_EMAIL,
        },
      },
      password: {
        type: DataTypes.STRING(1024),
        allowNull: false,
      },
      points: {
        type: DataTypes.REAL,
        allowNull: false,
        defaultValue: 0,
      },
      isAdmin: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
        defaultValue: false,
      },
    },
    {
      connection,
      tableName: "Users",
      timestamps: true,
    }
  );
