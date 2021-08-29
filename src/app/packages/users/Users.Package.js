import Database from "../../../infrastructure/database";
import { Protocols } from "../../helpers";
import Config from "../../../../config";

// **==========================================================================
// **                              Users
// **==========================================================================
export const checkUser = async (
  id = null,
  email = null,
  adminCheck = false
) => {
  try {
    const user = await Database.Users.findOne({
      where: { id, email },
      attributes: ["id", "isAdmin"],
    });

    return Protocols.appResponse({
      data: user && (!adminCheck || user.isAdmin),
    });
  } catch (err) {
    return Protocols.appResponse({ err });
  }
};

export const profile = async (userId) => {
  try {
    const user = await Database.Users.findByPk(userId, {
      attributes: {
        exclude: ["password", "createdAt", "updatedAt", "deletedAt"],
      },
    });

    if (user.picture) user.picture = `${Config.CloudBucketURL}${user.picture}`;

    return Protocols.appResponse({ data: user });
  } catch (err) {
    return Protocols.appResponse({ err });
  }
};

export const modify = async (args, id) => {
  try {
    const updatedUser = await Database.Users.update(args, {
      where: { id },
      returning: true,
      attributes: {
        exclude: ["password", "createdAt", "updatedAt", "deletedAt"],
      },
    });

    return Protocols.appResponse({ data: updatedUser[1] });
  } catch (err) {
    return Protocols.appResponse({ err });
  }
};
