import LocaleKeys from "../../../app/locales";

export default (connection, DataTypes) =>
  connection.define(
    "Cites",
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
      },
      arabicName: {
        type: DataTypes.STRING(50),
        allowNull: false,
        unique: {
          args: true,
          msg: LocaleKeys.CITY_EXIST,
        },
      },
      englishName: {
        type: DataTypes.STRING(50),
        allowNull: false,
        unique: {
          args: true,
          msg: LocaleKeys.CITY_EXIST,
        },
      },
    },
    {
      connection,
      tableName: "Cites",
      schema: "public",
      timestamps: true,
    }
  );
