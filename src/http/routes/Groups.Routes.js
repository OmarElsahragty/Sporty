import express from "express";
import { Authenticate } from "../middlewares";
import { groupsController } from "../controllers";

const router = express.Router();

// **==========================================================================
// **                             GroupRoles
// **==========================================================================
router.get("/groupRoles", Authenticate(), groupsController.getGroupRoles);
router.get("/groupRole/:id", Authenticate(), groupsController.getGroupRole);
router.post("/groupRole", Authenticate(true), groupsController.createGroupRole);
router.put(
  "/groupRole/:id",
  Authenticate(true),
  groupsController.modifyGroupRole
);
router.delete(
  "/groupRole/:id",
  Authenticate(true),
  groupsController.deleteGroupRole
);

// **==========================================================================
// **                                Groups
// **==========================================================================
router.get("/groups", Authenticate(), groupsController.getGroups);
router.get("/myGroups", Authenticate(), groupsController.getMyGroups);
router.get("/group/:id", Authenticate(), groupsController.getGroup);
router.post("/group", Authenticate(), groupsController.createGroup);
router.put("/group/:id", Authenticate(), groupsController.modifyGroup);
router.delete("/group/:id", Authenticate(), groupsController.deleteGroup);

// **==========================================================================
// **                        Groups Members
// **==========================================================================
router.get(
  "/groupMembers/:id",
  Authenticate(),
  groupsController.getGroupMembers
);
router.post("/groupJoin", Authenticate(), groupsController.joinGroup);
router.put("/groupJoin", Authenticate(), groupsController.approveGroupJoin);
router.put(
  "/groupMemberRole",
  Authenticate(),
  groupsController.assignGroupRole
);

export default router;
