import express from "express";
import { Authenticate, validate } from "../middlewares";
import { usersController } from "../controllers";
import { userValidation } from "../../../app/validations";

const router = express.Router();

// **==========================================================================
// **                                Auth
// **==========================================================================

router.post(
  "/login",
  validate(userValidation.loginValidator),
  usersController.auth.login
);

router.post(
  "/registration",
  validate(userValidation.registrationValidator),
  usersController.auth.registration
);

router.put(
  "/password",
  Authenticate(),
  validate(userValidation.changePasswordValidator),
  usersController.auth.changePassword
);

// **==========================================================================
// **                                Users
// **==========================================================================

router.get("/profile", Authenticate(), usersController.users.profile);

router.put(
  "/user",
  Authenticate(),
  validate(userValidation.modifyValidator),
  usersController.users.modify
);

export default router;
