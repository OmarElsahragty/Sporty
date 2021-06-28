export default (connection, DataTypes) =>
  connection.define(
    "Configurations",
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
      },
      emailServiceHost: {
        type: DataTypes.STRING(255),
        allowNull: true,
      },
      EmailAddress: {
        type: DataTypes.STRING(255),
        allowNull: true,
      },
      EmailUsername: {
        type: DataTypes.STRING(255),
        allowNull: true,
      },
      EmailPassword: {
        type: DataTypes.STRING(255),
        allowNull: true,
      },
      GroupDefaultRole: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "GroupRoles",
          key: "id",
        },
      },
    },
    {
      connection,
      tableName: "Configurations",
      schema: "public",
      timestamps: false,
    }
  );
