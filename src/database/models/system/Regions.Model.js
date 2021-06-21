import LocaleKeys from "../../../app/locales";

export default (connection, DataTypes) =>
  connection.define(
    "Regions",
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
      },
      cityId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "Cites",
          key: "id",
        },
      },
      arabicName: {
        type: DataTypes.STRING(50),
        allowNull: false,
        unique: {
          args: true,
          msg: LocaleKeys.REGION_EXIST,
        },
      },
      englishName: {
        type: DataTypes.STRING(50),
        allowNull: false,
        unique: {
          args: true,
          msg: LocaleKeys.REGION_EXIST,
        },
      },
    },
    {
      connection,
      tableName: "Regions",
      schema: "public",
      timestamps: true,
    }
  );
