import { Op } from "sequelize";
import Database from "../../../infrastructure/database";
import { Filter, Pagination, Protocols, Sorting } from "../../helpers";

// **==========================================================================
// **                                Sports
// **==========================================================================
export const showSports = async ({ pageNumber, pageSizeLimit, ...args }) => {
  try {
    const Sports = await Database.Sports.findAndCountAll({
      attributes: { exclude: ["createdAt", "updatedAt", "deletedAt"] },
      ...Pagination(
        { where: Filter(args), order: Sorting(args) },
        pageNumber,
        pageSizeLimit
      ),
    });

    return Protocols.appResponse({ data: Sports });
  } catch (err) {
    return Protocols.appResponse({ err });
  }
};

export const showSport = async (id) => {
  try {
    return Protocols.appResponse({
      data: await Database.Sports.findByPk(id),
    });
  } catch (err) {
    return Protocols.appResponse({ err });
  }
};

export const createSport = async (args) => {
  try {
    const existDeletedSport = await Database.Sports.findOne({
      where: {
        arabicName: args.arabicName,
        englishName: args.englishName,
        deletedAt: { [Op.ne]: null },
      },
      paranoid: false,
    });

    if (existDeletedSport) {
      return Protocols.appResponse({ data: await existDeletedSport.restore() });
    } else {
      return Protocols.appResponse({
        data: await Database.Sports.create(args),
      });
    }
  } catch (err) {
    return Protocols.appResponse({ err });
  }
};

export const modifySport = async (id, args) => {
  try {
    const updatedSport = await Database.Sports.update(args, {
      where: { id },
      returning: true,
    });

    return Protocols.appResponse({ data: updatedSport[1] });
  } catch (err) {
    return Protocols.appResponse({ err });
  }
};

export const deleteSport = async (id) => {
  try {
    return Protocols.appResponse({
      data: await Database.Sports.destroy({
        where: { id },
        force: false,
        returning: true,
      }),
    });
  } catch (err) {
    return Protocols.appResponse({ err });
  }
};
