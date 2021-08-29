import LocaleKeys from "../../../../app/locales";

export default (connection, DataTypes) =>
  connection.define(
    "Events",
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
          msg: LocaleKeys.EVENT_EXIST,
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
      groupId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "Groups",
          key: "id",
        },
      },
      activity: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "Sports",
          key: "id",
        },
      },
    },
    {
      connection,
      tableName: "Events",
      schema: "public",
      timestamps: true,
    }
  );
