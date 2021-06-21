import LocaleKeys from "../../../app/locales";

export default (connection, DataTypes) =>
  connection.define(
    "GroupRoles",
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
        unique: {
          args: true,
          msg: LocaleKeys.ROLE_EXIST,
        },
      },
      englishName: {
        type: DataTypes.STRING(100),
        allowNull: false,
        unique: {
          args: true,
          msg: LocaleKeys.ROLE_EXIST,
        },
      },
      permissions: {
        type: DataTypes.JSONB,
        allowNull: false,
      },
    },
    {
      connection,
      tableName: "GroupRoles",
      schema: "public",
      timestamps: true,
    }
  );
