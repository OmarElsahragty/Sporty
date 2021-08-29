import BaseController from "../Base.Controller";
import { groupsPackage } from "../../../../app/packages";

class GroupsMembersController extends BaseController {
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
      req.body,
      req.userId
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
export default new GroupsMembersController();
