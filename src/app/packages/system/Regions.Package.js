import { Op } from "sequelize";
import Database from "../../../infrastructure/database";
import { Filter, Pagination, Protocols, Sorting } from "../../helpers";

// **==========================================================================
// **                                Regions
// **==========================================================================
export const showRegions = async ({ pageNumber, pageSizeLimit, ...args }) => {
  try {
    const Regions = await Database.Regions.findAndCountAll({
      attributes: { exclude: ["createdAt", "updatedAt", "deletedAt"] },
      ...Pagination(
        { where: Filter(args), order: Sorting(args) },
        pageNumber,
        pageSizeLimit
      ),
    });

    return Protocols.appResponse({ data: Regions });
  } catch (err) {
    return Protocols.appResponse({ err });
  }
};

export const showRegion = async (id) => {
  try {
    return Protocols.appResponse({
      data: await Database.Regions.findByPk(id),
    });
  } catch (err) {
    return Protocols.appResponse({ err });
  }
};

export const createRegion = async (args) => {
  try {
    const existDeletedRegion = await Database.Regions.findOne({
      where: {
        arabicName: args.arabicName,
        englishName: args.englishName,
        deletedAt: { [Op.ne]: null },
      },
      paranoid: false,
    });

    if (existDeletedRegion) {
      return Protocols.appResponse({
        data: await existDeletedRegion.restore(),
      });
    } else {
      return Protocols.appResponse({
        data: await Database.Regions.create(args),
      });
    }
  } catch (err) {
    return Protocols.appResponse({ err });
  }
};

export const modifyRegion = async (id, args) => {
  try {
    const updatedRegion = await Database.Regions.update(args, {
      where: { id },
      returning: true,
    });

    return Protocols.appResponse({ data: updatedRegion[1] });
  } catch (err) {
    return Protocols.appResponse({ err });
  }
};

export const deleteRegion = async (id) => {
  try {
    return Protocols.appResponse({
      data: await Database.Regions.destroy({
        where: { id },
        force: false,
        returning: true,
      }),
    });
  } catch (err) {
    return Protocols.appResponse({ err });
  }
};
