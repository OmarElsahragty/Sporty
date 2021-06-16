/* eslint-disable operator-linebreak */
/* eslint-disable no-restricted-syntax */
import { Op } from "sequelize";

export default (params) => {
  const filterObj = {};

  for (const [key, value] of Object.entries(params)) {
    if (
      value !== "ASC" &&
      value !== "DESC" &&
      key !== "page" &&
      key !== "pageSizeLimit"
    ) {
      Object.assign(filterObj, { [key]: { [Op.like]: `%${value}%` } });
    }
  }

  return filterObj;
};
