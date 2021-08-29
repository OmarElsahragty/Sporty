export default (connection, DataTypes) =>
  connection.define(
    "EventMembers",
    {
      eventId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        references: {
          model: "Events",
          key: "id",
        },
      },
      userId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        references: {
          model: "Users",
          key: "id",
        },
      },
    },
    {
      connection,
      tableName: "EventMembers",
      schema: "public",
      timestamps: true,
    }
  );
