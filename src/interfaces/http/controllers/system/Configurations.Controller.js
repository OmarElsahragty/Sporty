import BaseController from "../Base.Controller";
import { systemPackage } from "../../../../app/packages";

class ConfigurationsController extends BaseController {
  getConfigurations = async (req, res, next) => {
    const data = await this.exec(next, systemPackage.showConfigurations);
    if (data) return this.okRes(req, res, data);
  };

  modifyConfigurations = async (req, res, next) => {
    const data = await this.exec(
      next,
      systemPackage.updateConfigurations,
      req.body
    );
    if (data) return this.okRes(req, res, data);
  };
}
export default new ConfigurationsController();
