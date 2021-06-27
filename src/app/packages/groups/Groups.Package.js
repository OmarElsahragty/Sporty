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
      return Protocols.appResponse({
        data: await existDeletedGroupRole.restore(),
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

export const showGroups = async ({ pageNumber, pageSizeLimit, ...args }) => {
  try {
    const Groups = await Database.Groups.findAndCountAll({
      attributes: ["id", "name", "gender", "interests", "picture"],
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

export const showGroup = async (id) => {
  try {
    return Protocols.appResponse({
      data: await Database.Groups.findByPk(id, {
        include: [{ model: Database.GroupMembers, as: "GroupMembers" }],
      }),
    });
  } catch (err) {
    return Protocols.appResponse({ err });
  }
};

export const createGroup = async (args) => {
  try {
    const existDeletedGroup = await Database.Groups.findOne({
      where: {
        name: args.name,
        deletedAt: { [Op.ne]: null },
      },
      paranoid: false,
    });

    if (existDeletedGroup) {
      return Protocols.appResponse({ data: await existDeletedGroup.restore() });
    } else {
      return Protocols.appResponse({
        data: await Database.Groups.create(args),
      });
    }
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

export const deleteGroup = async (id) => {
  try {
    return Protocols.appResponse({
      data: await Database.Groups.destroy({
        where: { id },
        force: false,
        returning: true,
      }),
    });
  } catch (err) {
    return Protocols.appResponse({ err });
  }
};
