export default (connection, DataTypes) =>
  connection.define(
    "GroupMembers",
    {
      groupId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        references: {
          model: "Groups",
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
      groupRoleId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
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
