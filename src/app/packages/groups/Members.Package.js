import Database from "../../../infrastructure/database";
import { Filter, Pagination, Protocols, Sorting } from "../../helpers";

// **==========================================================================
// **                        Groups Members
// **==========================================================================
export const showGroupMembers = async (
  groupId,
  { pageNumber, pageSizeLimit, ...args }
) => {
  try {
    const Members = await Database.GroupMembers.findAndCountAll({
      attributes: ["approved"],
      include: [
        {
          attributes: ["id", "firstName", "lastName", "picture"],
          model: Database.Users,
          as: "user",
        },
        {
          attributes: ["arabicName", "englishName", "permissions"],
          model: Database.GroupRoles,
          as: "groupRole",
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

export const joinGroupRequest = async ({ groupId, userId }, loggedInUser) => {
  try {
    const Configurations = await Database.Configurations.findByPk(1);

    return Protocols.appResponse({
      data: await Database.GroupMembers.create({
        userId: userId || loggedInUser,
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
