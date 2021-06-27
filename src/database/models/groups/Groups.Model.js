import LocaleKeys from "../../../app/locales";

export default (connection, DataTypes) =>
  connection.define(
    "Groups",
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING(100),
        allowNull: false,
        unique: {
          args: true,
          msg: LocaleKeys.GROUP_EXIST,
        },
      },
      picture: {
        type: DataTypes.STRING(1024),
        allowNull: true,
      },
      description: {
        type: DataTypes.STRING(1024),
        allowNull: true,
      },
      gender: {
        type: DataTypes.ENUM("M", "F"),
        allowNull: false,
      },
      interests: {
        type: DataTypes.ARRAY(DataTypes.INTEGER),
        allowNull: false,
      },
      approved: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
        defaultValue: false,
      },
    },
    {
      connection,
      tableName: "Groups",
      schema: "public",
      timestamps: true,
      paranoid: true,
    }
  );
