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
      },
      englishName: {
        type: DataTypes.STRING(50),
        allowNull: false,
      },
    },
    {
      connection,
      tableName: "Cites",
      schema: "public",
      timestamps: true,
      paranoid: true,
      indexes: [
        {
          unique: {
            args: true,
            msg: LocaleKeys.CITY_EXIST,
          },
          fields: ["arabicName", "englishName"],
        },
      ],
    }
  );
