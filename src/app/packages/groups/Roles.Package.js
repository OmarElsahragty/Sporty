import { Op } from "sequelize";
import Database from "../../../infrastructure/database";
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

export const modifyGroupRole = async (id, args) => {
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
