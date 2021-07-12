import jwt from "jsonwebtoken";
import Config from "../../../config";
import Errors from "../../errors";
import { usersPackage } from "../../app/packages";
import LocaleKeys from "../../app/locales";

export default (isAdmin = false) => {
  return (req, _, next) => {
    const token = req.headers["x-access-token"];

    if (!token) {
      return next(Errors.http.unauthorized(LocaleKeys.NO_TOKEN));
    }

    jwt.verify(token, Config.JwtSecret, async (err, decoded) => {
      if (err) return next(Errors.http.unauthorized(LocaleKeys.UNAUTHORIZED));

      const isAuthenticated = await usersPackage.checkUser(
        decoded.id,
        decoded.email,
        isAdmin
      );

      if (!isAuthenticated.data) {
        return next(Errors.http.unauthorized(LocaleKeys.UNAUTHORIZED));
      }

      req.userId = decoded.id;
      next();
    });
  };
};
