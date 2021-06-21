export default (connection, DataTypes) =>
  connection.define(
    "GroupMembers",
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
      },
      groupId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "Groups",
          key: "id",
        },
      },
      userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "Users",
          key: "id",
        },
      },
      groupRoleId: {
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
      tableName: "GroupMembers",
      schema: "public",
      timestamps: true,
    }
  );
