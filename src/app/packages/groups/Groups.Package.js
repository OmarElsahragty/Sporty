import { Op } from "sequelize";
import Database from "../../../database";
import { Filter, Pagination, Protocols, Sorting } from "../../helpers";

// **==========================================================================
// **                             GroupRoles
// **==========================================================================

export const showGroupRoles = async ({
  pageNumber,
  pageSizeLimit,
  ...args
}) => {
  try {
    const GroupRoles = await Database.GroupRoles.findAndCountAll({
      attributes: ["id", "arabicName", "englishName"],
      ...Pagination(
        { where: Filter(args), order: Sorting(args) },
        pageNumber,
        pageSizeLimit
      ),
    });

    return Protocols.appResponse({ data: GroupRoles });
  } catch (err) {
    return Protocols.appResponse({ err });
  }
};

export const showGroupRole = async (id) => {
  try {
    return Protocols.appResponse({
      data: await Database.GroupRoles.findByPk(id),
    });
  } catch (err) {
    return Protocols.appResponse({ err });
  }
};

export const createGroupRole = async (args) => {
  try {
    const existDeletedGroupRole = await Database.GroupRoles.findOne({
      where: {
        arabicName: args.arabicName,
        englishName: args.englishName,
        deletedAt: { [Op.ne]: null },
      },
      paranoid: false,
    });

    if (existDeletedGroupRole) {
      const restoredGroupRole = await existDeletedGroupRole.restore();
      restoredGroupRole.permissions = args.permissions;
      return Protocols.appResponse({
        data: await restoredGroupRole.save(),
      });
    } else {
      return Protocols.appResponse({
        data: await Database.GroupRoles.create(args),
      });
    }
  } catch (err) {
    return Protocols.appResponse({ err });
  }
};

export const updateGroupRole = async (id, args) => {
  try {
    const updatedGroupRole = await Database.GroupRoles.update(args, {
      where: { id },
      returning: true,
    });

    return Protocols.appResponse({ data: updatedGroupRole[1] });
  } catch (err) {
    return Protocols.appResponse({ err });
  }
};

export const deleteGroupRole = async (id) => {
  try {
    return Protocols.appResponse({
      data: await Database.GroupRoles.destroy({
        where: { id },
        force: false,
        returning: true,
      }),
    });
  } catch (err) {
    return Protocols.appResponse({ err });
  }
};

// **==========================================================================
// **                             Groups
// **==========================================================================

// TODO : Groups members count

export const showGroups = async ({ pageNumber, pageSizeLimit, ...args }) => {
  try {
    const Groups = await Database.Groups.findAndCountAll({
      attributes: ["id", "name", "gender", "interests", "picture"],
      include: [
        {
          model: Database.Regions,
          as: "groupRegion",
          include: [{ model: Database.Cites, as: "city" }],
        },
      ],
      ...Pagination(
        { where: Filter(args), order: Sorting(args) },
        pageNumber,
        pageSizeLimit
      ),
    });

    return Protocols.appResponse({ data: Groups });
  } catch (err) {
    return Protocols.appResponse({ err });
  }
};

export const showGroup = async (groupId, userId) => {
  try {
    const currentUser = await Database.GroupMembers.findOne({
      where: { groupId, userId },
    });

    return Protocols.appResponse({
      data: {
        currentUser,
        ...(await Database.Groups.findByPk(groupId, {
          attributes: {
            exclude: ["region", "createdAt", "updatedAt"],
          },
          include: [
            {
              model: Database.Regions,
              as: "groupRegion",
              attributes: {
                exclude: ["createdAt", "updatedAt", "deletedAt"],
              },
              include: [
                {
                  model: Database.Cites,
                  as: "city",
                  attributes: {
                    exclude: ["createdAt", "updatedAt", "deletedAt"],
                  },
                },
              ],
            },
          ],
        })),
      },
    });
  } catch (err) {
    return Protocols.appResponse({ err });
  }
};

export const createGroup = async (args, userId) => {
  try {
    return Protocols.appResponse({
      data: await Database.Groups.create(
        { GroupMembers: { userId, approved: true }, ...args },
        {
          include: [
            {
              model: Database.GroupMembers,
              as: "GroupMembers",
            },
          ],
        }
      ),
    });
  } catch (err) {
    return Protocols.appResponse({ err });
  }
};

export const updateGroup = async (id, args) => {
  try {
    const updatedGroup = await Database.Groups.update(args, {
      where: { id },
      returning: true,
    });

    return Protocols.appResponse({ data: updatedGroup[1] });
  } catch (err) {
    return Protocols.appResponse({ err });
  }
};

// TODO : Delete return

export const deleteGroup = async (id) => {
  try {
    return Protocols.appResponse({
      data: await Database.Groups.destroy({
        where: { id },
        returning: true,
      }),
    });
  } catch (err) {
    return Protocols.appResponse({ err });
  }
};

export const showMyGroups = async (
  { pageNumber, pageSizeLimit, ...args },
  userId
) => {
  try {
    const Groups = await Database.GroupMembers.findAndCountAll(
      {
        attributes: ["approved"],
        ...Pagination(
          { where: { userId, ...Filter(args) }, order: Sorting(args) },
          pageNumber,
          pageSizeLimit
        ),
      },
      {
        include: [
          {
            order: Sorting(args),
            attributes: ["id", "name", "gender", "interests", "picture"],
            model: Database.Groups,
            as: "group",
            include: [
              {
                model: Database.Regions,
                as: "groupRegion",
                include: [{ model: Database.Cites, as: "city" }],
              },
            ],
          },
        ],
      }
    );

    return Protocols.appResponse({ data: Groups });
  } catch (err) {
    return Protocols.appResponse({ err });
  }
};

// **==========================================================================
// **                        Groups Members
// **==========================================================================

export const showGroupMembers = async (
  groupId,
  { pageNumber, pageSizeLimit, ...args }
) => {
  try {
    const Members = await Database.GroupMembers.findAndCountAll({
      attributes: ["groupRoleId", "approved"],
      include: [
        {
          attributes: ["firstName", "lastName", "picture"],
          model: Database.Users,
          as: "user",
        },
      ],
      ...Pagination(
        { where: { groupId, ...Filter(args) }, order: Sorting(args) },
        pageNumber,
        pageSizeLimit
      ),
    });

    return Protocols.appResponse({ data: Members });
  } catch (err) {
    return Protocols.appResponse({ err });
  }
};

export const joinGroupRequest = async ({ groupId, userId }) => {
  try {
    const Configurations = await Database.Configurations.findByPk(1);

    return Protocols.appResponse({
      data: await Database.GroupMembers.create({
        userId,
        groupId,
        groupRoleId: Configurations.GroupDefaultRole,
      }),
    });
  } catch (err) {
    return Protocols.appResponse({ err });
  }
};

export const joinGroupApprove = async ({ groupId, userId }) => {
  try {
    const joinGroupApproval = await Database.GroupMembers.update(
      { approved: true },
      {
        where: { groupId, userId },
        returning: true,
      }
    );

    return Protocols.appResponse({ data: joinGroupApproval[1] });
  } catch (err) {
    return Protocols.appResponse({ err });
  }
};

export const groupRoleAssign = async ({ groupId, userId, groupRoleId }) => {
  try {
    const groupAssignedRole = await Database.GroupMembers.update(
      { groupRoleId },
      {
        where: { groupId, userId },
        returning: true,
      }
    );

    return Protocols.appResponse({ data: groupAssignedRole[1] });
  } catch (err) {
    return Protocols.appResponse({ err });
  }
};
