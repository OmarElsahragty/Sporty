import BaseController from "../Base.Controller";
import { systemPackage } from "../../../../app/packages";

class RegionsController extends BaseController {
  getRegions = async (req, res, next) => {
    const data = await this.exec(next, systemPackage.showRegions, req.query);
    if (data) return this.okRes(req, res, data);
  };

  getRegion = async (req, res, next) => {
    const data = await this.exec(next, systemPackage.showRegion, req.params.id);
    if (data) return this.okRes(req, res, data);
  };

  createRegion = async (req, res, next) => {
    const data = await this.exec(next, systemPackage.createRegion, req.body);
    if (data) return this.okRes(req, res, data);
  };

  modifyRegion = async (req, res, next) => {
    const data = await this.exec(
      next,
      systemPackage.modifyRegion,
      req.params.id,
      req.body
    );
    if (data) return this.okRes(req, res, data);
  };

  deleteRegion = async (req, res, next) => {
    const data = await this.exec(
      next,
      systemPackage.deleteRegion,
      req.params.id
    );
    if (data) return this.okRes(req, res, data);
  };
}
export default new RegionsController();
