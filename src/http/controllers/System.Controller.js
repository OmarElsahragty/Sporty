import BaseController from "./Base.Controller";
import { systemPackage } from "../../app/packages";

class SystemController extends BaseController {
  // **==========================================================================
  // **                         Configurations
  // **==========================================================================

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

  // **==========================================================================
  // **                              Cites
  // **==========================================================================

  getCites = async (req, res, next) => {
    const data = await this.exec(
      next,
      systemPackage.showItems,
      "Cites",
      req.query
    );
    if (data) return this.okRes(req, res, data);
  };

  getCity = async (req, res, next) => {
    const data = await this.exec(
      next,
      systemPackage.showItem,
      "Cites",
      req.params.id
    );
    if (data) return this.okRes(req, res, data);
  };

  createCity = async (req, res, next) => {
    const data = await this.exec(
      next,
      systemPackage.createItem,
      "Cites",
      req.body
    );
    if (data) return this.okRes(req, res, data);
  };

  modifyCity = async (req, res, next) => {
    const data = await this.exec(
      next,
      systemPackage.updateItem,
      "Cites",
      req.params.id,
      req.body
    );
    if (data) return this.okRes(req, res, data);
  };

  deleteCity = async (req, res, next) => {
    const data = await this.exec(
      next,
      systemPackage.deleteItem,
      "Cites",
      req.params.id
    );
    if (data) return this.okRes(req, res, data);
  };

  // **==========================================================================
  // **                             Regions
  // **==========================================================================

  getRegions = async (req, res, next) => {
    const data = await this.exec(
      next,
      systemPackage.showItems,
      "Regions",
      req.query
    );
    if (data) return this.okRes(req, res, data);
  };

  getRegion = async (req, res, next) => {
    const data = await this.exec(
      next,
      systemPackage.showItem,
      "Regions",
      req.params.id
    );
    if (data) return this.okRes(req, res, data);
  };

  createRegion = async (req, res, next) => {
    const data = await this.exec(
      next,
      systemPackage.createItem,
      "Regions",
      req.body
    );
    if (data) return this.okRes(req, res, data);
  };

  modifyRegion = async (req, res, next) => {
    const data = await this.exec(
      next,
      systemPackage.updateItem,
      "Regions",
      req.params.id,
      req.body
    );
    if (data) return this.okRes(req, res, data);
  };

  deleteRegion = async (req, res, next) => {
    const data = await this.exec(
      next,
      systemPackage.deleteItem,
      "Regions",
      req.params.id
    );
    if (data) return this.okRes(req, res, data);
  };

  // **==========================================================================
  // **                             Sports
  // **==========================================================================
  getSports = async (req, res, next) => {
    const data = await this.exec(
      next,
      systemPackage.showItems,
      "Sports",
      req.query
    );
    if (data) return this.okRes(req, res, data);
  };

  getSport = async (req, res, next) => {
    const data = await this.exec(
      next,
      systemPackage.showItem,
      "Sports",
      req.params.id
    );
    if (data) return this.okRes(req, res, data);
  };

  createSport = async (req, res, next) => {
    const data = await this.exec(
      next,
      systemPackage.createItem,
      "Sports",
      req.body
    );
    if (data) return this.okRes(req, res, data);
  };

  modifySport = async (req, res, next) => {
    const data = await this.exec(
      next,
      systemPackage.updateItem,
      "Sports",
      req.params.id,
      req.body
    );
    if (data) return this.okRes(req, res, data);
  };

  deleteSport = async (req, res, next) => {
    const data = await this.exec(
      next,
      systemPackage.deleteItem,
      "Sports",
      req.params.id
    );
    if (data) return this.okRes(req, res, data);
  };
}
export default new SystemController();
