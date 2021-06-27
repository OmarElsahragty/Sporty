import { Op } from "sequelize";

export default (params) => {
  const filterObj = {};

  Object.keys(params).map((key) => {
    const value = JSON.parse(params[key]);

    if (
      value !== "ASC" &&
      value !== "DESC" &&
      key !== "page" &&
      key !== "pageSizeLimit"
    ) {
      if (Array.isArray(value)) {
        Object.assign(filterObj, {
          [key]: { [Op.contains]: value },
        });
      } else if (typeof value === "string") {
        Object.assign(filterObj, { [key]: { [Op.like]: `%${value}%` } });
      } else {
        Object.assign(filterObj, { [key]: { [Op.eq]: value } });
      }
    }
  });

  return filterObj;
};
