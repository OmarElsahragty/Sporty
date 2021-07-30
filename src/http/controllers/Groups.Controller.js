import BaseController from "./Base.Controller";
import { groupsPackage } from "../../app/packages";

class GroupsController extends BaseController {
  // **==========================================================================
  // **                              GroupRoles
  // **==========================================================================

  getGroupRoles = async (req, res, next) => {
    const data = await this.exec(next, groupsPackage.showGroupRoles, req.query);
    if (data) return this.okRes(req, res, data);
  };

  getGroupRole = async (req, res, next) => {
    const data = await this.exec(
      next,
      groupsPackage.showGroupRole,
      req.params.id
    );
    if (data) return this.okRes(req, res, data);
  };

  createGroupRole = async (req, res, next) => {
    const data = await this.exec(next, groupsPackage.createGroupRole, req.body);
    if (data) return this.okRes(req, res, data);
  };

  modifyGroupRole = async (req, res, next) => {
    const data = await this.exec(
      next,
      groupsPackage.updateGroupRole,
      req.params.id,
      req.body
    );
    if (data) return this.okRes(req, res, data);
  };

  deleteGroupRole = async (req, res, next) => {
    const data = await this.exec(
      next,
      groupsPackage.deleteGroupRole,
      req.params.id
    );
    if (data) return this.okRes(req, res, data);
  };

  // **==========================================================================
  // **                              Groups
  // **==========================================================================

  getGroups = async (req, res, next) => {
    const data = await this.exec(next, groupsPackage.showGroups, req.query);
    if (data) return this.okRes(req, res, data);
  };

  getMyGroups = async (req, res, next) => {
    const data = await this.exec(
      next,
      groupsPackage.showMyGroups,
      req.query,
      req.userId
    );
    if (data) return this.okRes(req, res, data);
  };

  getGroup = async (req, res, next) => {
    const data = await this.exec(
      next,
      groupsPackage.showGroup,
      req.params.id,
      req.userId
    );
    if (data) return this.okRes(req, res, data);
  };

  createGroup = async (req, res, next) => {
    const data = await this.exec(
      next,
      groupsPackage.createGroup,
      req.body,
      req.userId
    );
    if (data) return this.okRes(req, res, data);
  };

  modifyGroup = async (req, res, next) => {
    const data = await this.exec(
      next,
      groupsPackage.updateItem,
      req.params.id,
      req.body
    );
    if (data) return this.okRes(req, res, data);
  };

  deleteGroup = async (req, res, next) => {
    const data = await this.exec(
      next,
      groupsPackage.deleteGroup,
      req.params.id
    );
    if (data) return this.okRes(req, res, data);
  };

  // **==========================================================================
  // **                        Groups Members
  // **==========================================================================

  getGroupMembers = async (req, res, next) => {
    const data = await this.exec(
      next,
      groupsPackage.showGroupMembers,
      req.params.id,
      req.query
    );
    if (data) return this.okRes(req, res, data);
  };

  joinGroup = async (req, res, next) => {
    const data = await this.exec(
      next,
      groupsPackage.joinGroupRequest,
      req.body
    );
    if (data) return this.okRes(req, res, data);
  };

  approveGroupJoin = async (req, res, next) => {
    const data = await this.exec(
      next,
      groupsPackage.joinGroupApprove,
      req.body
    );
    if (data) return this.okRes(req, res, data);
  };

  assignGroupRole = async (req, res, next) => {
    const data = await this.exec(next, groupsPackage.groupRoleAssign, req.body);
    if (data) return this.okRes(req, res, data);
  };
}
export default new GroupsController();
