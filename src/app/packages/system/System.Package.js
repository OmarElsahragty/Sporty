import { Op } from "sequelize";
import Database from "../../../database";
import { Filter, Pagination, Protocols, Sorting } from "../../helpers";

// **==========================================================================
// **                         Configurations
// **==========================================================================

export const showConfigurations = async () => {
  try {
    return Protocols.appResponse({
      data: await Database.Configurations.findByPk(1),
    });
  } catch (err) {
    return Protocols.appResponse({ err });
  }
};

export const updateConfigurations = async (args) => {
  try {
    const updatedConfigurations = await Database.Configurations.update(args, {
      where: { id: 1 },
      returning: true,
    });
    return Protocols.appResponse({ data: updatedConfigurations[1] });
  } catch (err) {
    return Protocols.appResponse({ err });
  }
};

// **==========================================================================
// **                      Cites, Regions and Sports
// **==========================================================================

export const showItems = async (
  ModelName,
  { pageNumber, pageSizeLimit, ...args }
) => {
  try {
    const Items = await Database[ModelName].findAndCountAll({
      attributes: { exclude: ["createdAt", "updatedAt", "deletedAt"] },
      ...Pagination(
        { where: Filter(args), order: Sorting(args) },
        pageNumber,
        pageSizeLimit
      ),
    });

    return Protocols.appResponse({ data: Items });
  } catch (err) {
    return Protocols.appResponse({ err });
  }
};

export const showItem = async (ModelName, id) => {
  try {
    return Protocols.appResponse({
      data: await Database[ModelName].findByPk(id),
    });
  } catch (err) {
    return Protocols.appResponse({ err });
  }
};

export const createItem = async (ModelName, args) => {
  try {
    const existDeletedItem = await Database[ModelName].findOne({
      where: {
        arabicName: args.arabicName,
        englishName: args.englishName,
        deletedAt: { [Op.ne]: null },
      },
      paranoid: false,
    });

    if (existDeletedItem) {
      return Protocols.appResponse({ data: await existDeletedItem.restore() });
    } else {
      return Protocols.appResponse({
        data: await Database[ModelName].create(args),
      });
    }
  } catch (err) {
    return Protocols.appResponse({ err });
  }
};

export const updateItem = async (ModelName, id, args) => {
  try {
    const updatedItem = await Database[ModelName].update(args, {
      where: { id },
      returning: true,
    });

    return Protocols.appResponse({ data: updatedItem[1] });
  } catch (err) {
    return Protocols.appResponse({ err });
  }
};

export const deleteItem = async (ModelName, id) => {
  try {
    return Protocols.appResponse({
      data: await Database[ModelName].destroy({
        where: { id },
        force: false,
        returning: true,
      }),
    });
  } catch (err) {
    return Protocols.appResponse({ err });
  }
};
