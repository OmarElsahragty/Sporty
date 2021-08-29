import BaseController from "../Base.Controller";
import { systemPackage } from "../../../../app/packages";

class CitesController extends BaseController {
  getCites = async (req, res, next) => {
    const data = await this.exec(next, systemPackage.showCites, req.query);
    if (data) return this.okRes(req, res, data);
  };

  getCity = async (req, res, next) => {
    const data = await this.exec(next, systemPackage.showCity, req.params.id);
    if (data) return this.okRes(req, res, data);
  };

  createCity = async (req, res, next) => {
    const data = await this.exec(next, systemPackage.createCity, req.body);
    if (data) return this.okRes(req, res, data);
  };

  modifyCity = async (req, res, next) => {
    const data = await this.exec(
      next,
      systemPackage.modifyCity,
      req.params.id,
      req.body
    );
    if (data) return this.okRes(req, res, data);
  };

  deleteCity = async (req, res, next) => {
    const data = await this.exec(next, systemPackage.deleteCity, req.params.id);
    if (data) return this.okRes(req, res, data);
  };
}
export default new CitesController();
