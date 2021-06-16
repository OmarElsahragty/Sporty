import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { Op } from "sequelize";
import Database from "../../../database";
import { Protocols } from "../../helpers";
import Config from "../../../../config";
import LocaleKeys from "../../locales";

export const checkUser = async (
  id = null,
  phone = null,
  skipAdminCheck = true
) => {
  try {
    const user = await Database.Users.findOne({
      where: {
        [Op.and]: [{ id }, { phone }],
      },
      attributes: ["id"],
    });

    return Protocols.appResponse({
      data: user && (skipAdminCheck || user.isAdmin),
    });
  } catch (err) {
    return Protocols.appResponse({ err });
  }
};

export const create = async ({ password, ...args }) => {
  const hashedPassword = bcrypt.hashSync(password, 10);

  try {
    const user = await Database.Users.create({
      password: hashedPassword,
      ...args,
    });

    delete user.dataValues.password;

    const token = jwt.sign(
      { id: user.id, phone: user.phone },
      Config.JwtSecret,
      {
        expiresIn: Config.JwtLifeTime,
      }
    );

    const data = { token, user };

    return Protocols.appResponse({ data });
  } catch (err) {
    return Protocols.appResponse({ err });
  }
};

export const authenticate = async ({ phone, password }) => {
  try {
    const user = await Database.Users.findOne({
      where: {
        phone,
      },
    });
    if (user && bcrypt.compareSync(password, user.password)) {
      const token = jwt.sign(
        { id: user.id, phone: user.phone },
        Config.JwtSecret,
        {
          expiresIn: Config.JwtLifeTime,
        }
      );

      delete user.dataValues.password;
      return Protocols.appResponse({ data: { token, user } });
    } else {
      return Protocols.appResponse({ err: LocaleKeys.WRONG_CREDENTIALS });
    }
  } catch (err) {
    return Protocols.appResponse({ err });
  }
};

export const update = async (args, id) => {
  try {
    const updatedUser = await Database.Users.update(args, {
      where: { id },
      returning: true,
      attributes: { exclude: ["password"] },
    });

    return Protocols.appResponse({ data: updatedUser[1] });
  } catch (err) {
    return Protocols.appResponse({ err });
  }
};

export const changePassword = async ({ oldPassword, newPassword }, userId) => {
  try {
    const user = await Database.Users.findByPk(userId);

    if (user && bcrypt.compareSync(oldPassword, user.password)) {
      user.password = bcrypt.hashSync(newPassword, 10);
      await user.save();

      delete user.dataValues.password;
      return Protocols.appResponse({ data: user });
    } else {
      return Protocols.appResponse({ err: LocaleKeys.WRONG_CREDENTIALS });
    }
  } catch (err) {
    return Protocols.appResponse({ err });
  }
};
