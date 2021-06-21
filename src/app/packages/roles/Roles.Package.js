import Database from "../../../database";
import { Sorting, Pagination, Filter, Protocols } from "../../helpers";

export async function createRole(args) {
  try {
    const role = await Database.Roles.create(args);
    return Protocols.appResponse({ data: role });
  } catch (err) {
    return Protocols.appResponse({ err });
  }
}

export async function listRoles(args) {
  const filter = Filter(args);
  const sort = Sorting(args);

  const query = {
    where: filter,
    order: sort,
  };

  try {
    const RolesList = await Database.Roles.findAndCountAll(
      Pagination(query, args.page, args.pageSizeLimit)
    );

    return Protocols.appResponse({
      data: {
        Count: RolesList.count,
        Roles: RolesList.rows,
      },
    });
  } catch (err) {
    return Protocols.appResponse({ err });
  }
}
