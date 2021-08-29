import BaseController from "../Base.Controller";
import { groupsPackage } from "../../../../app/packages";

class GroupRolesController extends BaseController {
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
      groupsPackage.modifyGroupRole,
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
}
export default new GroupRolesController();
