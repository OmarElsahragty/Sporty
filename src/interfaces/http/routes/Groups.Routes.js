import express from "express";
import { Authenticate } from "../middlewares";
import { groupsController } from "../controllers";

const router = express.Router();

// **==========================================================================
// **                                Groups
// **==========================================================================
router.get("/groups", Authenticate(), groupsController.groups.getGroups);
router.get("/myGroups", Authenticate(), groupsController.groups.getMyGroups);
router.get("/group/:id", Authenticate(), groupsController.groups.getGroup);
router.post("/group", Authenticate(), groupsController.groups.createGroup);
router.put("/group/:id", Authenticate(), groupsController.groups.modifyGroup);
router.delete(
  "/group/:id",
  Authenticate(),
  groupsController.groups.deleteGroup
);

// **==========================================================================
// **                        Groups Members
// **==========================================================================
router.get(
  "/groupMembers/:id",
  Authenticate(),
  groupsController.members.getGroupMembers
);
router.post("/groupJoin", Authenticate(), groupsController.members.joinGroup);
router.put(
  "/groupJoin",
  Authenticate(),
  groupsController.members.approveGroupJoin
);
router.put(
  "/groupMemberRole",
  Authenticate(),
  groupsController.members.assignGroupRole
);

// **==========================================================================
// **                             GroupRoles
// **==========================================================================
router.get("/groupRoles", Authenticate(), groupsController.roles.getGroupRoles);
router.get(
  "/groupRole/:id",
  Authenticate(),
  groupsController.roles.getGroupRole
);
router.post(
  "/groupRole",
  Authenticate(true),
  groupsController.roles.createGroupRole
);
router.put(
  "/groupRole/:id",
  Authenticate(true),
  groupsController.roles.modifyGroupRole
);
router.delete(
  "/groupRole/:id",
  Authenticate(true),
  groupsController.roles.deleteGroupRole
);

export default router;
