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
        allowNull: false,
        references: {
          model: "GroupRoles",
          key: "id",
        },
      },
      approved: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
        defaultValue: false,
      },
    },
    {
      connection,
      tableName: "GroupMembers",
      schema: "public",
      timestamps: true,
    }
  );
