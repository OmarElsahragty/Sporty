import jwt from "jsonwebtoken";
import Config from "../../../config";
import Errors from "../../errors";
import { usersPackage } from "../../app/packages";
import LocaleKeys from "../../app/locales";

export const Authenticate = async (req, _, next) => {
  const token = req.headers["x-access-token"];

  if (!token) {
    return next(Errors.http.unauthorized(LocaleKeys.NO_TOKEN));
  }
  jwt.verify(token, Config.JwtSecret, async (err, decoded) => {
    if (err) return next(Errors.http.unauthorized(LocaleKeys.UNAUTHORIZED));

    const isAuthenticated = await usersPackage.checkUser(
      decoded.id,
      decoded.email
    );

    if (!isAuthenticated.data) {
      return next(Errors.http.unauthorized(LocaleKeys.UNAUTHORIZED));
    }

    req.userId = decoded.id;
    next();
  });
};

export const isAdmin = async (req, _, next) => {
  const token = req.headers["x-access-token"];

  if (!token) {
    return next(Errors.http.forbidden(LocaleKeys.NO_TOKEN));
  }
  jwt.verify(token, Config.JwtSecret, async (err, decoded) => {
    if (err) return next(Errors.http.forbidden(LocaleKeys.FORBIDDEN));

    const isAuthenticated = await usersPackage.checkUser(
      decoded.id,
      decoded.email,
      false
    );

    if (!isAuthenticated.data) {
      return next(Errors.http.forbidden(LocaleKeys.FORBIDDEN));
    }

    req.userId = decoded.id;
    next();
  });
};
