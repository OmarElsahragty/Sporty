import LocaleKeys from "../../../../app/locales";

export default (connection, DataTypes) =>
  connection.define(
    "Sports",
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
      },
      arabicName: {
        type: DataTypes.STRING(100),
        allowNull: false,
      },
      englishName: {
        type: DataTypes.STRING(100),
        allowNull: false,
      },
    },
    {
      connection,
      tableName: "Sports",
      schema: "public",
      timestamps: true,
      paranoid: true,
      indexes: [
        {
          unique: {
            args: true,
            msg: LocaleKeys.SPORT_EXIST,
          },
          fields: ["arabicName", "englishName"],
        },
      ],
    }
  );
