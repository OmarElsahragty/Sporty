import BaseController from "../Base.Controller";
import { groupsPackage } from "../../../../app/packages";

class GroupsController extends BaseController {
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
      groupsPackage.modifyGroup,
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
}
export default new GroupsController();
