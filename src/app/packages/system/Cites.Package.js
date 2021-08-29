import { Op } from "sequelize";
import Database from "../../../infrastructure/database";
import { Filter, Pagination, Protocols, Sorting } from "../../helpers";

// **==========================================================================
// **                                Cites
// **==========================================================================
export const showCites = async ({ pageNumber, pageSizeLimit, ...args }) => {
  try {
    const Cites = await Database.Cites.findAndCountAll({
      attributes: { exclude: ["createdAt", "updatedAt", "deletedAt"] },
      ...Pagination(
        { where: Filter(args), order: Sorting(args) },
        pageNumber,
        pageSizeLimit
      ),
    });

    return Protocols.appResponse({ data: Cites });
  } catch (err) {
    return Protocols.appResponse({ err });
  }
};

export const showCity = async (id) => {
  try {
    return Protocols.appResponse({
      data: await Database.Cites.findByPk(id),
    });
  } catch (err) {
    return Protocols.appResponse({ err });
  }
};

export const createCity = async (args) => {
  try {
    const existDeletedCity = await Database.Cites.findOne({
      where: {
        arabicName: args.arabicName,
        englishName: args.englishName,
        deletedAt: { [Op.ne]: null },
      },
      paranoid: false,
    });

    if (existDeletedCity) {
      return Protocols.appResponse({ data: await existDeletedCity.restore() });
    } else {
      return Protocols.appResponse({
        data: await Database.Cites.create(args),
      });
    }
  } catch (err) {
    return Protocols.appResponse({ err });
  }
};

export const modifyCity = async (id, args) => {
  try {
    const updatedCity = await Database.Cites.update(args, {
      where: { id },
      returning: true,
    });

    return Protocols.appResponse({ data: updatedCity[1] });
  } catch (err) {
    return Protocols.appResponse({ err });
  }
};

export const deleteCity = async (id) => {
  try {
    return Protocols.appResponse({
      data: await Database.Cites.destroy({
        where: { id },
        force: false,
        returning: true,
      }),
    });
  } catch (err) {
    return Protocols.appResponse({ err });
  }
};
