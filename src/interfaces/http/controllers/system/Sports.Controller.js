import BaseController from "../Base.Controller";
import { systemPackage } from "../../../../app/packages";

class SportsController extends BaseController {
  getSports = async (req, res, next) => {
    const data = await this.exec(next, systemPackage.showSports, req.query);
    if (data) return this.okRes(req, res, data);
  };

  getSport = async (req, res, next) => {
    const data = await this.exec(next, systemPackage.showSport, req.params.id);
    if (data) return this.okRes(req, res, data);
  };

  createSport = async (req, res, next) => {
    const data = await this.exec(next, systemPackage.createSport, req.body);
    if (data) return this.okRes(req, res, data);
  };

  modifySport = async (req, res, next) => {
    const data = await this.exec(
      next,
      systemPackage.modifySport,
      req.params.id,
      req.body
    );
    if (data) return this.okRes(req, res, data);
  };

  deleteSport = async (req, res, next) => {
    const data = await this.exec(
      next,
      systemPackage.deleteSport,
      req.params.id
    );
    if (data) return this.okRes(req, res, data);
  };
}
export default new SportsController();
