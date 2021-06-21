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
    },
    {
      connection,
      tableName: "Configurations",
      schema: "public",
      timestamps: true,
    }
  );
